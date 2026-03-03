# Free Multimodal RAG Chatbot

This is a fully functional, 100% free-tier compatible Multimodal Retrieval-Augmented Generation (RAG) chatbot built with Next.js App Router.

## Tech Stack
- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Next.js Serverless API routes
- **LLM**: Groq (Llama 3)
- **Embeddings**: HuggingFace Inference API (`sentence-transformers/all-MiniLM-L6-v2`)
- **Vector DB**: Qdrant Cloud
- **OCR**: OCR.Space

---

## 🔑 Getting Free API Keys

You will need 4 free API keys to run this application:

### 1. Groq API Key (For the LLM)
1. Go to [console.groq.com](https://console.groq.com/) and create an account.
2. Navigate to **API Keys** in the left sidebar.
3. Click **Create API Key**.
4. Copy the key and add it to your `.env` file as `GROQ_API_KEY`.

### 2. HuggingFace Token (For Embeddings)
1. Go to [huggingface.co](https://huggingface.co/) and create an account.
2. Navigate to **Settings > Access Tokens** (https://huggingface.co/settings/tokens).
3. Click **New token**, give it a name, set role to **Read**.
4. Copy the token and add it to your `.env` file as `HUGGINGFACE_API_KEY`.

### 3. Qdrant Cloud Cluster (For Vector Database)
1. Go to [cloud.qdrant.io](https://cloud.qdrant.io/) and create an account.
2. Create a new **Free Tier Cluster**. Wait a minute for it to provision.
3. Open the cluster details. You will need the **Cluster URL** and an **API Key**.
4. Copy the URL and add it to `.env` as `QDRANT_URL`.
5. Generate an API Key from the Data Access menu and add it as `QDRANT_API_KEY`.

### 4. OCR.Space API Key (For Image Parsing)
1. Go to [ocr.space](https://ocr.space/OCRAPI).
2. Click on the "Register for free API Key" button and fill out the email form.
3. The API key will be emailed to you instantly.
4. Copy the key and add it to `.env` as `OCR_API_KEY`.

---

## 🚀 Local Development

1. Clone or download this project.
2. Rename `.env.example` to `.env.local` and fill in your actual API keys.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌍 Deployment on Vercel

Since this relies heavily on serverless limits and uses no persistent local setup, it is perfectly optimized for Vercel's free tier.

1. **Push to GitHub**: Initialize a Git repository and push your project to a GitHub repo.
2. **Import to Vercel**: 
   - Go to [vercel.com/new](https://vercel.com/new) and log in with GitHub.
   - Import the repository you just created.
3. **Environment Variables**:
   - In the "Environment Variables" section of the Vercel deployment screen, add all the keys from your `.env.local` file:
     - `QDRANT_URL`
     - `QDRANT_API_KEY`
     - `HUGGINGFACE_API_KEY`
     - `GROQ_API_KEY`
     - `OCR_API_KEY`
4. **Deploy**:
   - Click the **Deploy** button.
   - Vercel will install dependencies, build the Next.js app, and deploy your API routes.
5. **Usage**:
   - Once deployed, your app is live! Upload an image or paste long text on the left panel to ingest it into your Qdrant vector database.
   - Wait for the "Success" message.
   - Use the chat on the right to start asking questions about the document/image you uploaded!
"# Chatbot-Assignment" 
