import {useEffect} from "react";

const Matomo = () =>
	useEffect(() => {
		const _paq = (window._paq = window._paq || []);
		_paq.push(["trackPageView"]);
		_paq.push(["enableLinkTracking"]);
		_paq.push(["disableCookies"]);

		const u = "https://delfinowebsite.matomo.cloud/";
		_paq.push(["setTrackerUrl", u + "matomo.php"]);
		_paq.push(["setSiteId", "2"]);

		const d = document;
		const g = d.createElement("script");
		const s = d.getElementsByTagName("script")[0];

		g.async = true;
		g.defer = true; // Defer loading
		g.src = "https://cdn.matomo.cloud/delfinowebsite.matomo.cloud/matomo.js";

		if (s && s.parentNode) {
			s.parentNode.insertBefore(g, s);
		} else {
			// If no script tag exists, append the Matomo script directly to the document head or body
			d.head.appendChild(g);
		}
	}, []);

export default Matomo;
