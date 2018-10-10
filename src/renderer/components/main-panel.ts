import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';

class MainPanel extends PolymerElement {

    list: string[];

    constructor() {
        super();
        this.list = ['status', '#chan1', '#quizz'];
    }

    static get template() {
        return html`
            <style>
                :host {
                    height: 100%;
                    border-right: 1px solid #516dab;
                    display: block;
                    width: 125px;
                }
                p {
                    margin: 0;
                }
                div {
                    padding: 5px;
                }
            </style>
            <div>

            </div>
        `;
    }
}

customElements.define('main-panel', MainPanel);