# share
```
mvn package
```

add the jar to your Alfresco Share deployment, typically in webapps/share/WEB-INF/lib


### docker
```
share:
    ...
    volumes:                  
      - ./tokenproxy-extension-1.0.0.jar:/usr/local/tomcat/webapps/share/WEB-INF/lib/tokenproxy-extension-1.0.0.jar:ro
```
