.DEFAULT_GOAL := build
CONTAINER_MANAGER ?= docker
CONTAINER_REGISTRY ?= $(AWS_ACCOUNT_ID).dkr.ecr.eu-central-1.amazonaws.com/$(REPOSITORY_NAME)

.PHONY: build
build:
	yarn install
	yarn build
	$(CONTAINER_MANAGER) build -t $(CONTAINER_REGISTRY) .

.PHONY: run
run:
	$(CONTAINER_MANAGER) run --rm --name $(REPOSITORY_NAME) -p 8080:80 $(CONTAINER_REGISTRY)

.PHONY: create-repository
create-repository:
	aws ecr create-repository --repository-name $(REPOSITORY_NAME)

.PHONY: ecr/login
ecr/login:
	$$(aws ecr get-login --no-include-email --region eu-central-1)

.PHONY: github/login
github/login:
	echo $(GITHUB_CR_PAT) | $(CONTAINER_MANAGER) login ghcr.io -u $(GITHUB_USER) --password-stdin

.PHONY: publish
publish: build
	$(CONTAINER_MANAGER) push $(CONTAINER_REGISTRY)

.PHONY: ecr/describe
ecr/describe:
	aws ecr describe-images --repository-name $(REPOSITORY_NAME)

.PHONY: install
install:
	helm upgrade --install technology-radar --namespace technology-radar --set "image.repository=$(CONTAINER_REGISTRY)" .helm
