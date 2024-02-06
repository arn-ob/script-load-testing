# How to Load Test xk6 and k6

## Install Config

> Delete file bin folder if any found.

> Install GoLang

> Add Path to .zshrc or .bashrc

```bash
export GOROOT="/usr/local/go"
export GOPATH="$HOME/Documents/yourProjectName”
export PATH="$HOME/Documents/yourProjectName/bin:$PATH"
```

> Reload/source Then .zshrc

````bash
source $HOME/.zshrc
```

> Install xk6 

```bash
go install go.k6.io/xk6/cmd/xk6@latest
```

> Build xk6 with the file extension

```bash
xk6 build v0.46.0 --with github.com/avitalique/xk6-file@latest
```

> Now run load test

```bash
k6 run --logformat raw specs/signup.js
```