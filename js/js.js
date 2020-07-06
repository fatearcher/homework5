<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script type="text/javascript">
    var arrLang = {
        'en': {
            'home': 'Home',
            'cast': 'Cast',
            'introduction': 'Introduction',
        },
        'jp': {
            'home': '¥Û©`¥à¥Ú©`¥¸',
            'cast': '¥­¥ã¥¹¥È',
            'introduction': '¥¤¥ó¥È¥í¥À¥¯¥·¥ç¥ó',
        }
    };

    // Process translation
    $(function () {
        $('.translate').click(function () {
            var lang = $(this).attr('id');

            $('.lang').each(function (index, item) {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            });
        });
    });
</script>

