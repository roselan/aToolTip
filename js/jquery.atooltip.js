/*
	jQuery Version:				jQuery 1.3.2+
	Plugin Name:				aToolTip V 1.5.1
	Plugin by: 					Ara Abcarians: http://ara-abcarians.com
	License:					aToolTip is licensed under a Creative Commons Attribution 3.0 Unported License/*
	jQuery Version:				jQuery 1.3.2+
	Plugin Name:				aToolTip V 1.5.1
	Plugin by: 					Ara Abcarians: http://ara-abcarians.com
	License:					aToolTip is licensed under a Creative Commons Attribution 3.0 Unported License
								Read more about this license at --> http://creativecommons.org/licenses/by/3.0/
	changes by roselan:			- created addatooltip function
								- added "open" option to open tooltip on creation.
								- modified default position from "right" to "bottom"
								- added "position" option
								- changed obj.attr('title', '') to obj.removeAttr('title')
								- note: IMO tipContent should be used if present, regardeless of the title attr, not the other way round.
	
*/
(function($) {
    $.fn.aToolTip = function(options) {
    	/**
    		setup default settings
    	*/
    	var defaults = {
    		// no need to change/override
    		closeTipBtn: 'aToolTipCloseBtn',
    		toolTipId: 'aToolTip',
    		// ok to override
    		fixed: false,
    		clickIt: false,
    		inSpeed: 200,
    		outSpeed: 100,
    		tipContent: '',
    		toolTipClass: 'defaultTheme',
    		xOffset: 5,
    		yOffset: 5,
    		onShow: null,
    		onHide: null,
    		open: false,
    		position: 'right'
    	},
    	// This makes it so the users custom options overrides the default ones
    	settings = $.extend({}, defaults, options);
    
		return this.each(function() {
			var obj = $(this);
			
			/**
				Decide weather to use a title attr as the tooltip content
			*/
			if(obj.attr('title')){
				// set the tooltip content/text to be the obj title attribute
				var tipContent = obj.attr('title');	 
			} else {
				// if no title attribute set it to the tipContent option in settings
				var tipContent = settings.tipContent;
			}
			
			/**
				Build the markup for aToolTip
			*/
			var buildaToolTip = function(){
				$('body').append("<div id='"+settings.toolTipId+"' class='"+settings.toolTipClass+"'><p class='aToolTipContent'>"+tipContent+"</p></div>");
				
				if(tipContent && settings.clickIt){
					$('#'+settings.toolTipId+' p.aToolTipContent')
					.append("<a id='"+settings.closeTipBtn+"' href='#' alt='close'>close</a>");
				}
			},
			/**
				Position aToolTip
			*/
			positionaToolTip = function(){
				if ( settings.position == 'right')
				{
					startTop = (obj.offset().top - $('#'+settings.toolTipId).outerHeight() - settings.yOffset) + 'px';
					startLeft = (obj.offset().left + obj.outerWidth() + settings.xOffset) + 'px';				
				}
				else if (settings.position == 'bottom')
				{
					startTop = (obj.offset().top + obj.outerHeight() + settings.yOffset);
					startLeft = (obj.offset().left + settings.xOffset);
				}
				
				$('#'+settings.toolTipId).css({
					top: startTop,
					left: startLeft
				})
				.stop().fadeIn(settings.inSpeed, function(){
					if ($.isFunction(settings.onShow)){
						settings.onShow(obj);
					}
				});				
			},
			/**
				Remove aToolTip
			*/
			removeaToolTip = function(){
				// Fade out
				$('#'+settings.toolTipId).stop().fadeOut(settings.outSpeed, function(){
				    $(this).remove();
				    if($.isFunction(settings.onHide)){
						settings.onHide(obj);
					}
				});				
			},
			
			addaToolTip = function(){
				// remove already existing tooltip
				$('#'+settings.toolTipId).remove();
				//obj.attr({title: ''});
				obj.removeAttr('title');
				buildaToolTip();
				positionaToolTip();
			};
			
			/**
				Decide what kind of tooltips to display
			*/
			// Regular aToolTip
			if(tipContent && !settings.clickIt){
				// first time
				if (settings.open) {
					addaToolTip();
				}				
				// Activate on hover	
				obj.hover(function(){
					addaToolTip();					
			    }, function(){ 
					removeaToolTip();					
			    });	
		    } 		    
		    
		    // Click activated aToolTip
		    if(tipContent && settings.clickIt){
				// Activate on click	
				obj.click(function(el){
					addatooltip();
					// Click to close tooltip
					$('#'+settings.closeTipBtn).click(function(){
						removeaToolTip();
						return false;
					});		 
					return false;			
			    });
		    }
		    
		    // Follow mouse if enabled
		    if(!settings.fixed && !settings.clickIt){
				obj.mousemove(function(el){
					$('#'+settings.toolTipId).css({
						top: (el.pageY - $('#'+settings.toolTipId).outerHeight() - settings.yOffset),
						left: (el.pageX + settings.xOffset)
					});
				});			
			}		    
		  
		}); // END: return this
    };
})(jQuery);
								Read more about this license at --> http://creativecommons.org/licenses/by/3.0/
	
*/
(function($) {
    $.fn.aToolTip = function(options) {
    	/**
    		setup default settings
    	*/
    	var defaults = {
    		// no need to change/override
    		closeTipBtn: 'aToolTipCloseBtn',
    		toolTipId: 'aToolTip',
    		// ok to override
    		fixed: false,
    		clickIt: false,
    		inSpeed: 200,
    		outSpeed: 100,
    		tipContent: '',
    		toolTipClass: 'defaultTheme',
    		xOffset: 5,
    		yOffset: 5,
    		onShow: null,
    		onHide: null,
    		open: false,
    		position: 'right'
    	},
    	// This makes it so the users custom options overrides the default ones
    	settings = $.extend({}, defaults, options);
    
		return this.each(function() {
			var obj = $(this);
			
			/**
				Decide weather to use a title attr as the tooltip content
			*/
			if(obj.attr('title')){
				// set the tooltip content/text to be the obj title attribute
				var tipContent = obj.attr('title');	 
			} else {
				// if no title attribute set it to the tipContent option in settings
				var tipContent = settings.tipContent;
			}
			
			/**
				Build the markup for aToolTip
			*/
			var buildaToolTip = function(){
				$('body').append("<div id='"+settings.toolTipId+"' class='"+settings.toolTipClass+"'><p class='aToolTipContent'>"+tipContent+"</p></div>");
				
				if(tipContent && settings.clickIt){
					$('#'+settings.toolTipId+' p.aToolTipContent')
					.append("<a id='"+settings.closeTipBtn+"' href='#' alt='close'>close</a>");
				}
			},
			/**
				Position aToolTip
			*/
			positionaToolTip = function(){
				if ( settings.position == 'right')
				{
					startTop = (obj.offset().top - $('#'+settings.toolTipId).outerHeight() - settings.yOffset) + 'px';
					startLeft = (obj.offset().left + obj.outerWidth() + settings.xOffset) + 'px';				
				}
				else if (settings.position == 'bottom')
				{
					startTop = (obj.offset().top + obj.outerHeight() + settings.yOffset);
					startLeft = (obj.offset().left + settings.xOffset);
				}
				
				$('#'+settings.toolTipId).css({
					top: startTop,
					left: startLeft
				})
				.stop().fadeIn(settings.inSpeed, function(){
					if ($.isFunction(settings.onShow)){
						settings.onShow(obj);
					}
				});				
			},
			/**
				Remove aToolTip
			*/
			removeaToolTip = function(){
				// Fade out
				$('#'+settings.toolTipId).stop().fadeOut(settings.outSpeed, function(){
				    $(this).remove();
				    if($.isFunction(settings.onHide)){
						settings.onHide(obj);
					}
				});				
			},
			
			addaToolTip = function(){
				// remove already existing tooltip
				$('#'+settings.toolTipId).remove();
				//obj.attr({title: ''});
				obj.removeAttr('title');
				buildaToolTip();
				positionaToolTip();
			};
			
			/**
				Decide what kind of tooltips to display
			*/
			// Regular aToolTip
			if(tipContent && !settings.clickIt){
				// first time
				if (settings.open) {
					addaToolTip();
				}				
				// Activate on hover	
				obj.hover(function(){
					addaToolTip();					
			    }, function(){ 
					removeaToolTip();					
			    });	
		    } 		    
		    
		    // Click activated aToolTip
		    if(tipContent && settings.clickIt){
				// Activate on click	
				obj.click(function(el){
					addatooltip();
					// Click to close tooltip
					$('#'+settings.closeTipBtn).click(function(){
						removeaToolTip();
						return false;
					});		 
					return false;			
			    });
		    }
		    
		    // Follow mouse if enabled
		    if(!settings.fixed && !settings.clickIt){
				obj.mousemove(function(el){
					$('#'+settings.toolTipId).css({
						top: (el.pageY - $('#'+settings.toolTipId).outerHeight() - settings.yOffset),
						left: (el.pageX + settings.xOffset)
					});
				});			
			}		    
		  
		}); // END: return this
    };
})(jQuery);