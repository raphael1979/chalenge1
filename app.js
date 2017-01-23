$(document).ready(  
	function()
	{
		$.ajax( {
			type: "GET",
			url: "data.xml",
			dataType: "xml",
			success: function(xml) 
			{ 
				$(xml).find('site').each( function()
					{var id = $(this).attr('id');
					var title = $(this).find('title').text();
					var url = $(this).find('url').text();
					$('<div class="items" id="link_' + id + '"></div>').html('<a href="' + url + '">' + title + '</a>').appendTo('#Div_XML');
				} );

			}
		}
		);
	}
	);            
