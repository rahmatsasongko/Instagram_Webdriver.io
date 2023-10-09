const waitHelper = require('../../helpers/waitHelper');

class HomePage {
    get menuSearch(){
        return $('xpath://android.widget.FrameLayout[@content-desc="Search and explore"]')
    }

    get fieldSearch(){
        return $('xpath:/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.EditText')
    }

    get clickFirstUser(){
        return $('xpath:/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout[1]/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.LinearLayout')
    }

    get buttonFollow(){
        return $('xpath://android.widget.Button[@content-desc="Follow Ariel"]')
    }


    get buttonMessage(){
        return $('xpath://android.widget.Button[@content-desc="Message"]')
    }
    get inputMessage(){
        return $('xpath:/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[3]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.EditText')
    }
    get clickSendMessage(){
        return $(`android=new UiSelector().text("Send")`);
        
    }


    async clickSearchUser(){
        await waitHelper.waitAndClick(this.menuSearch);
    }

    async inputusername(string){
        await waitHelper.waitAndClick(this.fieldSearch);
        await this.fieldSearch.setValue(string);
        await waitHelper.waitAndClick(this.clickFirstUser);
    }

    async clickFollowhUser(){
        await waitHelper.waitAndClick(this.buttonFollow);
    }


    async sendMessage(string){
        await waitHelper.waitAndClick(this.buttonMessage);
        await waitHelper.waitAndClick(this.inputMessage);
        await this.inputMessage.setValue(string);
        await waitHelper.waitAndClick(this.clickSendMessage);

    }

}

module.exports = new HomePage()