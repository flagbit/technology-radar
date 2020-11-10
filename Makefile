.DEFAULT_GOAL := build

AWS_ACCOUNT := 700707183175
ECR_REPOSITORY := flagbit/technology-radar

.PHONY: build
build:
	yarn install
	yarn build
	docker build -t $(AWS_ACCOUNT).dkr.ecr.eu-central-1.amazonaws.com/$(ECR_REPOSITORY) .

.PHONY: run
run:
	docker run --rm -p 80:80 $(AWS_ACCOUNT).dkr.ecr.eu-central-1.amazonaws.com/$(ECR_REPOSITORY)

.PHONY: publish
publish: build
	$$(aws ecr get-login --no-include-email --region eu-central-1)
	docker push $(AWS_ACCOUNT).dkr.ecr.eu-central-1.amazonaws.com/$(ECR_REPOSITORY)
