# youtube-downloader-api
REST API for download YouTube videos in MP3 format

Follow this tutorial for Docker instalation..
```sh
https://www.youtube.com/watch?v=BK-C2RofmTE
```
Once done...

## Launch the container with Docker-compose

youtube-downloader-api is very easy to install and deploy in a Docker container.

# youtube-downloader-api DOCKER DEVELOPMENT ENVIRONMENT

```sh
cd youtube-downloader-api
```

```sh
docker-compose -f docker-compose.yml build  
```
You will see how the container is build. 


Once done, run the Docker image.
```sh
docker-compose -f docker-compose.yml up 
```

If you want to terminate the process, run
```sh
Ctrl + C
```

### Run as a process if necessary.

```sh
docker-compose -f docker-compose.yml up -d
```

If you want to terminate the process, run
```sh
docker-compose -f docker-compose.yml down
```

Verify the development environment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:5000
```
### FOR NEW DEPENDENCES

If new dependencies are added:

```sh
docker-compose -f docker-compose.yml down -v 
```
Then run the above mentioned commands to build and run the docker image.


# youtube-downloader-api DOCKER PRODUCTION ENVIRONMENT

```sh
cd youtube-downloader-api
docker-compose -f docker-compose.prod.yml build  
```
You will see how the container is build.


Once done, run the Docker image.
```sh
docker-compose -f docker-compose.prod.yml up 
```

If you want to terminate the process, run
```sh
Ctrl + C
```

### Run as a process if necessary.

```sh
docker-compose -f docker-compose.prod.yml up -d
```

If you want to terminate the process, run
```sh
docker-compose -f docker-compose.prod.yml down
```

Verify the production environment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:5000
```
### FOR NEW DEPENDENCES

If new dependencies are added:

```sh
docker-compose -f docker-compose.prod.yml down -v 
```
Then run the above mentioned commands to build and run the docker image.