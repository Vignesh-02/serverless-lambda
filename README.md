# Serverless Lambda — Random Number Generator

A simple AWS Lambda function deployed via the [Serverless Framework](https://www.serverless.com/), with automated CI/CD using GitHub Actions.

---

## Project Structure

```
serverless-lambda/
├── .github/
│   └── workflows/
│       └── main.yml        # GitHub Actions CI/CD pipeline
├── src/
│   └── handler.js          # Lambda function handler
├── serverless.yml          # Serverless Framework configuration
└── package.json
```

---

## Lambda Function

**File:** [src/handler.js](src/handler.js)

The `generateRandomNumber` handler generates a random "lucky number" between 7 and 16 (a random integer from 0–9, plus 7) and returns it as a JSON response.

**Endpoint:** `GET /getNumber`

**Success Response (200):**
```json
{
  "message": "Successfully generated a random lucky number",
  "number": 12
}
```

**Error Response (500):**
```json
{
  "message": "Failed to generate random number",
  "error": "..."
}
```

---

## Infrastructure

**File:** [serverless.yml](serverless.yml)

| Setting     | Value                    |
|-------------|--------------------------|
| Cloud       | AWS                      |
| Runtime     | Node.js 20.x             |
| Region      | us-east-1                |
| Stage       | dev                      |
| Timeout     | 60 seconds               |
| Memory      | 128 MB                   |
| CORS        | Enabled                  |

---

## CI/CD Pipeline

**File:** [.github/workflows/main.yml](.github/workflows/main.yml)

The pipeline triggers automatically on every push to the `main` branch and runs the following steps:

1. **Checkout code** — Fetches the latest source code using `actions/checkout@v4`.
2. **Setup Node.js** — Installs Node.js 20 with npm caching enabled.
3. **Install dependencies** — Runs `npm ci` for a clean, reproducible install.
4. **Deploy** — Uses the official `serverless/github-action@v3.1` action to run `serverless deploy`, pushing the function to AWS.

### Required GitHub Secrets

The pipeline authenticates with AWS using repository secrets. Set these in **Settings → Secrets and variables → Actions**:

| Secret                  | Description                        |
|-------------------------|------------------------------------|
| `AWS_ACCESS_KEY_ID`     | IAM user access key ID             |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret access key         |

> The IAM user needs permissions to manage Lambda, API Gateway, CloudFormation, S3, and IAM roles.

---

## Local Development

**Prerequisites:** Node.js 20+, AWS CLI configured, Serverless Framework installed globally.

```bash
# Install dependencies
npm ci

# Deploy manually
npx serverless deploy

# Invoke the function locally
npx serverless invoke local --function function_test1

# Remove the stack
npx serverless remove
```
