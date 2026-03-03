import { QdrantClient } from "@qdrant/js-client-rest";

const qdrantUrl = process.env.QDRANT_URL;
const qdrantApiKey = process.env.QDRANT_API_KEY;

if (!qdrantUrl || !qdrantApiKey) {
    console.warn("Qdrant variables are not set. Ensure QDRANT_URL and QDRANT_API_KEY are provided in .env.");
}

export const qdrantClient = new QdrantClient({
    url: qdrantUrl || "",
    apiKey: qdrantApiKey || "",
});

export const COLLECTION_NAME = "multimodal_rag_chatbot";

export async function ensureCollectionExists() {
    try {
        const collections = await qdrantClient.getCollections();
        const exists = collections.collections.some((c) => c.name === COLLECTION_NAME);

        if (!exists) {
            await qdrantClient.createCollection(COLLECTION_NAME, {
                vectors: {
                    size: 384, // size for sentence-transformers/all-MiniLM-L6-v2
                    distance: "Cosine",
                },
            });
            console.log(`Collection ${COLLECTION_NAME} created.`);
        }
    } catch (error) {
        console.error("Error creating/checking Qdrant collection:", error);
    }
}
