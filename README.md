# EKS ArgoCD Capstone Project

![CI/CD Pipeline](https://github.com/atulupadhyay2004/eks-argocd-capstone/actions/workflows/ci-cd.yml/badge.svg)

## Month 5 Capstone — Complete GitOps Pipeline

Production grade CI/CD pipeline using GitHub Actions,
ArgoCD, EKS, and Helm.

## Architecture

\`\`\`
Code Push → GitHub Actions (CI)
         → Tests run
         → Docker image built + pushed
         → GitOps repo updated
         → ArgoCD detects change (CD)
         → Sync waves deploy in order
         → Health probes validate
         → Smoke tests confirm
         → Deployment complete ✅
\`\`\`

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| Node.js + Express | REST API |
| Jest + Supertest | Testing |
| Docker | Containerization |
| GitHub Actions | CI Pipeline |
| Amazon EKS | Kubernetes cluster |
| ArgoCD | GitOps operator |
| Helm | Application packaging |
| AWS | Cloud infrastructure |

## API Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | / | Project info + version |
| GET | /health | Health + system stats |
| GET | /users | All users |
| GET | /users/:id | User by ID |
| POST | /users | Create user |

## Pipeline Stages

### CI (GitHub Actions)
1. Run 8 automated tests
2. Build Docker image with Git SHA tag
3. Push to Docker Hub
4. Update image tag in GitOps repo

### CD (ArgoCD)
1. Detects change in GitOps repo
2. Wave 0: Deploy ConfigMap
3. Wave 1: Deploy App + Service
4. Wave 2: Run smoke tests (PostSync hook)

## Rollback Strategy

3 methods tested and documented:
1. Git revert (recommended)
2. ArgoCD UI history
3. ArgoCD CLI

## Repositories

- App code: github.com/atulupadhyay2004/eks-argocd-capstone
- GitOps config: github.com/atulupadhyay2004/eks-argocd-capstone-gitops

## Author

**Atul Upadhyay**
- GitHub: [@atulupadhyay2004](https://github.com/atulupadhyay2004)
- LinkedIn: [Atul Upadhyay](https://linkedin.com/in/atul-upadhyay-847796309)
