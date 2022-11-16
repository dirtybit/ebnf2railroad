Build the image
```
$ docker build -t enbf-viewer .
```

Tag the image
```
$ docker tag enbf-viewer ghcr.io/dirtybit/enbf-viewer:latest
```

Push to the registry
```
$ docker push ghcr.io/dirtybit/enbf-viewer:latest
```
