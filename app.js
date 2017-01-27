$(document).ready(  
	function()
	{
		$.ajax( {
			type: "GET",
			url: "data.xml",
			dataType: "xml",
			success: function(xml) 
			{ 
				$(xml).find('client').each( function(){
					var id = $(this).attr('id');
					var nom = $(this).find('nom').text();
					//console.log(nom);
					$('.choix').append($('<option>', { value: id, text: nom}));

				} );
				$('select').change(function(){
					//console.log(value);
					value = this.value;
					//console.log(value);
					var x = $(xml).find('#'+value);
					var nom = (x.find('nom').text());
					var prenom = (x.find('prenom').text());
					var age = (x.find('age').text());
					var metier = (x.find('metier').text());
					var mail = (x.find('mail').text());
					var tel = (x.find('tel').text());

					 $('#receiver').html(nom + ' ' + prenom + ' ' +  age + ' ' +  metier + ' ' +  mail + ' ' +  tel);
				})
			}
		}
		);
	}
	);          