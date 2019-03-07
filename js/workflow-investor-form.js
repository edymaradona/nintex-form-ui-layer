/*global NWF*/
/*global NWF$*/
/*global langChoices*/
var SELECTED_LANGUAGE = 'English',
    DICTIONARY = {
        'CR_LINK_TITLE': {
            'English': 'Existing Company',
            'Arabic': 'شركة مسجلة'
        },
        'CR_LINK_DESCRIPTION': {
            'English': 'Company is register in Oman with CR Number',
            'Arabic': 'الشركة مسجلة في عمان '
        },
        'NO_CR_LINK_TITLE': {
            'English': 'new Company',
            'Arabic': 'شركة جديدة'
        },
        'NO_CR_LINK_DESCRIPTION': {
            'English': "Customer doesn't has a CR Number",
            'Arabic': 'الشركة غير مسجلة  في عمان'
        },
        'VALID_CR_MESSAGE': {
            'English': 'Please enter a valid CR Number',
            'Arabic': 'لرجاء إدخال رقم السجل التجاري ساري المفعول'
        },
        'NO_CR_BTN_CHECK_CR': {
            'English': 'Check CR',
            'Arabic': "التحقق من السجل التجاري"
        },
        'IS_VALID_CR_MESSAGE': {
            'English': 'Is it yours?',
            'Arabic': "هل لك؟"
        },
        'IS_VALID_CR_BTN': {
            'English': 'valid',
            'Arabic': "صالح"
        },
        'PROCEDURES_DETAILS_HEADER': {
            'English': 'Procedures',
            'Arabic': "الإجراءات"
        },
        'ATTACHMENTS_DETAILS_HEADER': {
            'English': 'Attachments',
            'Arabic': "المرفقات"
        },
        'MODAL_CLOSE_BTN': {
            'English': 'Close',
            'Arabic': "أغلق"
        },
        'NO_CR_YET_HEADER': {
            'English': 'No CR',
            'Arabic': "لا رقم"
        },
        'NO_CR_YET_TEXT': {
            'English': 'No CR Comming Soon',
            'Arabic': "لا رقم"
        },
        'btn-submit-lang': {
            'English': 'Submit',
            'Arabic': 'عرض'
        },
        'btn-cancel-lang': {
            'English': 'Cancel',
            'Arabic': 'إلغاء'
        }

    };

function getValueFromDictionary() {
    NWF$('.ng-view [data-dictionary]').each(function(index, element) {
        var targetElemnet = NWF$(element).data('dictionary');
        NWF$(element).text(DICTIONARY[targetElemnet][SELECTED_LANGUAGE]);
    });
}

function selectEnglish(el) {
    NWF$(".navbar-list-item").removeClass('active');
    NWF$(el).addClass('active');
    NWF$(NWF$("#" + langChoices).find("input")[0]).click();
    SELECTED_LANGUAGE = "English";
    getValueFromDictionary();
    NWF$('[lang-attr]').remove();
    NWF$('.arabic-modal-body-details').addClass('hide');
    NWF$('.english-modal-body-details').removeClass('hide');
    NWF$('.nf-validation-summary').empty();
    NWF$('.btn-submit-lang').find('input').val(DICTIONARY['btn-submit-lang'][SELECTED_LANGUAGE]);
    NWF$('.btn-cancel-lang').find('input').val(DICTIONARY['btn-cancel-lang'][SELECTED_LANGUAGE]);
    NWF$('head').append('<link lang-attr rel="stylesheet" type="text/css" href="https://investment-application-elmasria.c9users.io/css/app.en.css">');
}

function selectArabic(el) {
    NWF$(".navbar-list-item").removeClass('active');
    NWF$(el).addClass('active');
    NWF$(NWF$("#" + langChoices).find("input")[1]).click();
    SELECTED_LANGUAGE = "Arabic";
    getValueFromDictionary();
    NWF$('[lang-attr]').remove();
    NWF$('.nf-validation-summary').empty();
    NWF$('.arabic-modal-body-details').removeClass('hide');
    NWF$('.english-modal-body-details').addClass('hide');
    NWF$('.btn-submit-lang').find('input').val(DICTIONARY['btn-submit-lang'][SELECTED_LANGUAGE]);
    NWF$('.btn-cancel-lang').find('input').val(DICTIONARY['btn-cancel-lang'][SELECTED_LANGUAGE]);
    NWF$('head').append('<link lang-attr rel="stylesheet" type="text/css" href="https://investment-application-elmasria.c9users.io/css/app.ar.css">');
}

function _common() {
    NWF$(".app-table").hide('slow', function() {
        NWF$(".ng-view").css('height', '105px');

        NWF$('.cr-number-main-div').addClass('hide');
        NWF$("#s4-bodyContainer").removeClass('hide');

        //NWF$(".container").removeClass('hide');
    });
}

NWF.FormFiller.Events.RegisterAfterReady(function() {

    NWF$(document).ready(function() {
        NWF$('head').append('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
        NWF$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
        NWF$('head').append('<link lang-attr rel="stylesheet" type="text/css" href="https://investment-application-elmasria.c9users.io/css/app.en.css">');
        var ngView = NWF$("<div>", {
                'class': 'ng-view'
            }),
            workSpace = NWF$("body"); //NWF$("#s4-workspace");
        workSpace.append(ngView);

        NWF$(".multiple-lang").on('change', function() {
            var currentValue = NWF$(this).val(),
                targetSibling = NWF$(this).attr("class").split(' ')[1];
            NWF$("." + targetSibling).val(currentValue);
            NWF$("." + targetSibling).trigger("blur");
        });

        NWF$(".multiple-lang-yes-no").on('click', function() {
            var currentValue = NWF$(this).find('input').prop('checked'),
                targetSibling = NWF$(this).attr("class").split(' ')[1];
            NWF$("." + targetSibling).find('input').prop('checked', currentValue);
            NWF$("." + targetSibling).trigger("change");
        });

        NWF$(".multiple-lang-date").on('change', function() {
            var currentValue = NWF$(this).find('input').val(),
                targetSibling = NWF$(this).attr("class").split(' ')[1];
            NWF$("." + targetSibling).find('input').val(currentValue);
            NWF$("." + targetSibling).find('input').trigger("blur");
        });

        NWF$(".ng-view").load("/sites/Nintex/SiteAssets/html/index.html", function() {
            // HTMl File Loaded
            getValueFromDictionary();
            NWF$(".ng-view").css('height', '105px');
            NWF$(".app-table").addClass('hide');
            NWF$('.cr-input-nintex input').focus();

            NWF$('.nintex-label-sync').on('DOMSubtreeModified', 'label', function() {
                var elem = NWF$(this),
                    currentValue = elem.text(),
                    targetClientLabel = elem.parents('.nintex-label-sync').attr('class').split(' ');
                NWF$.each(targetClientLabel, function(index, value) {
                    NWF$('[data-nintex-label=' + value + ']').text(currentValue);
                    NWF$('[data-nintex-label=' + value + ']').next('input').attr('placeholder', currentValue);
                });

            });

            // if (NWF$('.decision-review').length !== 0) {
            //     NWF$('.decision-review').val(1);
            //     NWF$(".decision-review").trigger("blur");
            // }

            NWF$('.procedures-footer-link').on('click', function() {
                $('#proceduresLinkDetails').modal("show");
            });

            NWF$('.attachment-footer-link').on('click', function() {
                $('#listOfAttachments').modal("show");
            });

            //NWF$(".location-coordinates-view").find("input").attr('disabled', true);
        });
    });

});
