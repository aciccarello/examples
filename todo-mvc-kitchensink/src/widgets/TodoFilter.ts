import WidgetBase from '@dojo/widget-core/WidgetBase';
import ThemedMixin, { theme } from '@dojo/widget-core/mixins/Themed';
import { v, w } from '@dojo/widget-core/d';
import I18nMixin from '@dojo/widget-core/mixins/I18n';
import Link from '@dojo/routing/Link';

import appBundle from '../nls/common';
import * as css from './styles/todoFilter.m.css';

export interface TodoFilterProperties {
	filter?: string;
}

@theme(css)
export default class TodoFilter extends I18nMixin(ThemedMixin(WidgetBase))<TodoFilterProperties> {

	protected render() {
		const { filter } = this.properties;
		const { messages } = this.localizeBundle(appBundle);

		return v('ul', { classes: this.theme(css.filters) }, [
			v('li', [
				w(Link, {
					key: 'all',
					classes: this.theme(filter === 'all' ? css.selected : null),
					to: 'view',
					isOutlet: true,
					params: { filter: 'all' }
				}, [ messages.filterAll ]),
				w(Link, {
					key: 'active',
					classes: this.theme(filter === 'active' ? css.selected : null),
					to: 'view',
					isOutlet: true,
					params: { filter: 'active' }
				}, [ messages.filterActive ]),
				w(Link, {
					key: 'completed',
					classes: this.theme(filter === 'completed' ? css.selected : null),
					to: 'view',
					isOutlet: true,
					params: { filter: 'completed' }
				}, [ messages.filterCompleted ])
			])
		]);
	}
}
