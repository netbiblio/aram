function typewriter(node: Node, { speed = 1 } = {}) {
	const text = node.textContent;
	const valid =
		node.childNodes.length === 1 &&
		node.childNodes[0].nodeType === Node.TEXT_NODE &&
		text !== null;

	if (!valid) {
		throw new Error(
			`This transition only works on elements with a single text node child`
		);
	}

	const duration = text.length / (speed * 0.01);

	return {
		duration,
		tick(t: number) {
			const i = Math.trunc(text.length * t);
			delete (node as HTMLElement).dataset.hidden;
			node.textContent = text.slice(0, i);
		}
	};
}

export { typewriter };
