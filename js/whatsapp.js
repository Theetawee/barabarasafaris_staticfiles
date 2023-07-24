                var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?31376';
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = url;
                var options = {
					enabled: true,
					chatButtonSetting: {
						backgroundColor: "#00e785",
						ctaText: "Chat with us",
						borderRadius: "25",
						marginLeft: "0",
						marginRight: "20",
						marginBottom: "20",
						ctaIconWATI: false,
						position: "right",
					},
					brandSetting: {
						brandName: "Barabara Safari",
						brandSubTitle: "undefined",
						brandImg: "https://i.ibb.co/MZBLy49/logo.jpg",
						welcomeText: "Hi there!\nHow can I help you?",
						messageText: "",
						backgroundColor: "#00e785",
						ctaText: "Chat with us",
						borderRadius: "25",
						autoShow: false,
						phoneNumber: "256200951851",
					},
				};
                s.onload = function() {
                    CreateWhatsappChatWidget(options);
                };
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            