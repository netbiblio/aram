// See https://svelte.dev/docs/kit/types#app.d.ts

declare global {
	namespace App {
		interface PageData {
			description: string;
			text?: string;
			time?: string;
			title: string;
		}
	}
}

export {};
