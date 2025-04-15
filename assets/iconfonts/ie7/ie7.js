/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icon-opttorg\'">' + entity + '</span>' + html;
	}
	var icons = {
		'i-pag-next': '&#xe913;',
		'i-pag-prev': '&#xe914;',
		'i-filter': '&#xe912;',
		'i-calendar': '&#xe902;',
		'i-minus_2': '&#xe900;',
		'i-plus': '&#xe90b;',
		'i-arrow': '&#xe901;',
		'i-cart': '&#xe903;',
		'i-checked': '&#xe904;',
		'i-checked_2': '&#xe905;',
		'i-close': '&#xe906;',
		'i-delete': '&#xe907;',
		'i-document': '&#xe908;',
		'i-mail': '&#xe909;',
		'i-phone': '&#xe90a;',
		'i-products': '&#xe90c;',
		'i-search': '&#xe90d;',
		'i-star': '&#xe90e;',
		'i-time': '&#xe90f;',
		'i-user': '&#xe910;',
		'i-user_2': '&#xe911;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/i-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
