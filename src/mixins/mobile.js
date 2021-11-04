export const Mobile = {
	data() {
		return {
			isMobile: false
		};
	},
	mounted() {
		this.onResize();
	},
	methods: {
		onResize() {
			if (window.innerWidth < 769) this.isMobile = true;
			else this.isMobile = false;
		}
	}
};