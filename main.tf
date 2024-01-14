provider "aws" {
  region = "eu-north-1"
}

resource "aws_ecr_repository" "my_ecr_repo" {
  name = "my-ecr-repo"
}

output "repository_url" {
  value = aws_ecr_repository.my_ecr_repo.repository_url
}
