// based on CSS Scope Inline (https://github.com/gnat/css-scope-inline)
window.cssScopeSimple ??= new MutationObserver(() => {
  document?.body?.querySelectorAll('style[me-scoped]:not([ready])').forEach(node => {
	const id = node.parentNode?.id;
	if (!id) {
	  alert('❌ Parent element must have an ID to use [me-scoped], try adding this rule further up to a persistant container that has an id.');
	  throw new Error('Missing parent ID for <style me-scoped>');
	}

	let css = node.textContent;
	css = css.replace(/\b(me)\b/g, ':scope');
	css = `@scope (#${id}) {${css}}`;

	node.textContent = css;
	node.setAttribute('ready', '');
  });
}).observe(document.documentElement, { childList: true, subtree: true });
