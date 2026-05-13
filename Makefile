YARN := yarn
PORT ?= 3000

.PHONY: deps install dev run build clean-build lint typecheck verify clean preview

deps: install

install:
	$(YARN) install

dev: install
	$(YARN) dev

run: dev

build: install
	NEXT_TELEMETRY_DISABLED=1 $(YARN) build

lint: install
	$(YARN) lint

typecheck: install
	$(YARN) typecheck

verify: lint typecheck

clean-build: clean build

clean:
	rm -rf .next out node_modules

preview: build
	cd out && npx --yes serve -l $(PORT)
