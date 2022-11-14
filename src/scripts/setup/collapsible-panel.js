const CollapsiblePanel = {
    init() {
        const $elements = $('.js-collapsible-panel__content');

        $elements.on('show.bs.collapse', event => {
            const $target = event.target;
            const parentElement = $target.closest('.js-collapsible-panel');
            $(parentElement).addClass('is-open');
        })

        $elements.on('hidden.bs.collapse', event => {
            const $target = event.target;
            const parentElement = $target.closest('.js-collapsible-panel');
            $(parentElement).removeClass('is-open');
        })
    },
};

export default CollapsiblePanel;
