$(document).ready(  
	function()
	{
		$.ajax( {
			type: "GET",
			url: "data.xml",
			dataType: "xml",
			success: function(xml) 
			{ 
				$(xml).find('client').each( function()
				{
					var id = $(this).attr('id');
					var nom = $(this).find('nom').text();
					
					console.log(nom);
					$('.choix').append($('<option>', { value: id, text: nom}));

				} );

			}
			//$('.').;
		}
		);
	}
	);            
