(function() {
    var originalOnlineEditUrlAosFunction = Alfresco.util.onlineEditUrlAos;

    Alfresco.util.onlineEditUrlAos = function(g, d) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET',  g.baseUrl + '/token/', false); //false for synchronous
        try {
            xhr.send();
            if (xhr.status >= 200 && xhr.status < 300) {
                var response = JSON.parse(xhr.responseText);
                return g.baseUrl + "/token/"+response.token+d.webdavUrl.substring(7); 
            } else {
                return originalOnlineEditUrlAosFunction.apply(this, arguments);
            }
        } catch (e) {
            return originalOnlineEditUrlAosFunction.apply(this, arguments);
        }
    };
})();