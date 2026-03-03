import { HfInference } from "@huggingface/inference";

let hf: HfInference;

export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
    if (!hf) hf = new HfInference(process.env.HUGGINGFACE_API_KEY || "dummy");
    if (texts.length === 0) return [];

    try {
        // sentence-transformers/all-MiniLM-L6-v2 outputs 384 dimensions
        const output = await hf.featureExtraction({
            model: "sentence-transformers/all-MiniLM-L6-v2",
            inputs: texts,
        });

        // Output could be 1D (if single text) or 2D (if multiple). We normalize to 2D array.
        if (Array.isArray(output[0]) && typeof output[0][0] === 'number') {
            return output as number[][];
        } else if (Array.isArray(output) && typeof output[0] === 'number') {
            return [output as number[]];
        }

        // Fallback if shape is nested differently depending on HF Inference SDK version
        console.error("Unexpected embedding shape:", output);
        return [];
    } catch (error) {
        console.error("Error generating embeddings via HuggingFace:", error);
        throw error;
    }
}

export async function generateSingleEmbedding(text: string): Promise<number[]> {
    const embeddings = await generateEmbeddings([text]);
    return embeddings[0];
}
