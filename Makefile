
all:
	rm -rf dist
	mkdir dist || true
	npm install
	gulp