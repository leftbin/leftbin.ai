YARN := yarn
PORT ?= 3000

.PHONY: deps install dev run build lint typecheck verify clean preview

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

clean:
	rm -rf .next out node_modules .source

preview: build
	cd out && npx --yes serve -l $(PORT)
