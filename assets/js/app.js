
//Array contatti e messaggi
const contacts = [
	{
		name: 'Michele',
		avatar: '/img/avatar_1.jpg',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				message: 'Hai portato a spasso il cane?',
				status: 'sent',
			},
			{
				date: '10/01/2020 15:50:00',
				message: 'Ricordati di stendere i panni',
				status: 'sent',
			},
			{
				date: '10/01/2020 16:15:22',
				message: 'Tutto fatto!',
				status: 'received'
			},
		],
	},
	{
		name: 'Fabio',
		avatar: './img/avatar_2.jpg',
		visible: true,
		messages: [
			{
				date: '20/03/2020 16:30:00',
				message: 'Ciao come stai?',
				status: 'sent'
			},
			{
				date: '20/03/2020 16:30:55',
				message: 'Bene grazie! Stasera ci vediamo?',
				status: 'received'
			},
			{
				date: '20/03/2020 16:35:00',
				message: 'Mi piacerebbe ma devo andare a fare la spesa.',
				status: 'sent'
			},
		]
	},
	{
		name: 'Samuele',
		avatar: './img/avatar_3.jpg',
		visible: true,
		messages: [
			{
				date: '28/03/2020 10:10:40',
				message: 'La Marianna va in campagna',
				status: 'received'
			},
			{
				date: '28/03/2020 10:20:10',
				message: 'Sicuro di non aver sbagliato chat?',
				status: 'sent'
			},
			{
				date: '28/03/2020 16:15:22',
				message: 'Ah scusa!',
				status: 'received'
			},
		]
	},
	{
		name: 'Alessandro B.',
		avatar: './img/avatar_4.jpg',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				message: 'Lo sai che ha aperto una nuova pizzeria?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				message: 'Si, ma preferirei andare al cinema',
				status: 'received'
			},
		],
	},
	{
		name: 'Alessandro L.',
		avatar: './img/avatar_5.jpg',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				message: 'Ricordati di chiamare la nonna',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				message: 'Va bene, stasera la sento',
				status: 'received'
			},
		],
	},
	{
		name: 'Claudia',
		avatar: './img/avatar_6.jpg',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				message: 'Ciao Claudia, hai novità?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				message: 'Non ancora',
				status: 'received'
			},
			{
				date: '10/01/2020 15:51:00',
				message: 'Nessuna nuova, buona nuova',
				status: 'sent'
			}
		],
	},
	{
		name: 'Federico',
		avatar: './img/avatar_7.jpg',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				message: 'Fai gli auguri a Martina che è il suo compleanno!',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				message: 'Grazie per avermelo ricordato, le scrivo subito!',
				status: 'received'
			}
		],

	},
	{
		name: 'Davide',
		avatar: './img/avatar_8.jpg',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				message: 'Ciao, andiamo a mangiare la pizza stasera?',
				status: 'received'
			},
			{
				date: '10/01/2020 15:50:00',
				message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:51:00',
				message: 'OK!!',
				status: 'received'
			},
		],
	}
]

// var DateTime = luxon.DateTime;
// const now = DateTime.now();
// console.log(now);



const { createApp } = Vue

createApp({
	data() {
		return {
			contacts,
			countMessage: 0,
			activeUser: null,
			generatedUserMessage: null,
			newMessage: '',
			emptMessage: false,
			newSearch: '',
			lastMessage: null,
		}
	},

	methods: {

		generateUserMessage(index) {
			//console.log(this.contacts[index]);
			this.activeUser = index;
			//console.log(this.activeUser);
			//console.log(this.contacts[this.activeUser].messages[0].message);
			this.generatedUserMessage = this.contacts[index];
			console.log(this.generatedUserMessage);
			this.lastMessage = contacts[index].messages.length - 1;
			//console.log(this.lastMessage);

		},
		sendSms(userMessages) {
			console.log(this.newMessage);

			if (this.newMessage.length >= 1 && userMessages != null) {

				userMessages.messages.push({
					date: 'now',
					message: this.newMessage,
					status: 'sent'
				});
				this.newMessage = '';
				console.log(userMessages);
				setTimeout(() => {
					userMessages.messages.push({
						date: 'now + 1s',
						message: 'Ok',
						status: 'received'
					})
				}, 1000)
			}
			else {
				this.newMessage = '';
			}
		},
		search(nameSearch) {
			//console.log(nameSearch);
			this.newSearch = nameSearch;
			console.log(this.newSearch);
		},
		menuDelete(index) {

			if (index[this.lastMessage].status === 'received' && this.lastMessage != 0) {
				delete index[this.lastMessage].date;
				delete index[this.lastMessage].message;
				delete index[this.lastMessage].status;
			}
			
			this.lastMessage--


		}

	},

	mounted() {
		//console.log(this.contacts.name);
		// console.log(this.generatedUserMessage);

		//contacts[activeUser].messages
	}
}).mount('#app')


