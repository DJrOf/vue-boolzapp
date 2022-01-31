Vue.config.devtools = true;

new Vue({
    el: '#root',
    data: {
        user: {
            name: 'Nome Utente',
            avatar: '_io'
          },
          contacts: [
            {
              name: 'Michele',
              avatar: '_1',
            },
            {
              name: 'Fabio',
              avatar: '_2',
            },
            {
              name: 'Samuele',
              avatar: '_3',
            },
            {
              name: 'Luisa',
              avatar: '_4',
            },
          ],
          newMsgs: '',
          methods: {
            
            addMsg() {
                const newMsgs = this.newMsgs.trim();
                if (newMsgs) {
                    this.newMsg.push({ text: newMsgs, done: false }
                    );
            }
            this.newMsgs = '';
        },
    }
    }
  })