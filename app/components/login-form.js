import Component from '@glimmer/component';

export default class LoginFormComponent extends Component {
    /**
     * 
     * @param {Event & {target: HTMLFormElement}} evt 
     */

    onLoginFormSubmit(evt){
        const { target } = evt;
        const val = target.querySelector('select').value;
        evt.preventDefault();
        console.log("userid: ", val)
        // debugger;
    }
}
