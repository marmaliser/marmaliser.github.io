jQuery(document).ready(function () {
    var $ = jQuery;

    "use strict";
    var buy_codes = {};
    var _query = {};
    $('.coin-info-widget .grid-item [data-coin-code]').each(function () {
        var currCoin = ($(this));
        buy_codes[currCoin.data('coinId')] = currCoin.data('coinCode');
    });

    var buy_codes_str = '';
    $.each(buy_codes, function (key, val) {
        buy_codes_str += val + ',';
    });

    if (buy_codes_str.length > 0) {
        if (typeof(crstartCoins.api_query) === 'object') {
            $.each(crstartCoins.api_query, function (key, val) {
                if (val === '{FROM}') {
                    _query[key] = buy_codes_str
                } else if (val === '{TO}') {
                    _query[key] = crstartCoins.code_sell
                }
            });

            $.ajax({
                url: crstartCoins.api_url,
                type: "GET",
                dataType: 'json',
                data: _query,
                success: function (answer) {
                    $.each(answer.DISPLAY, function (coin_id, coin_val) {
                        //console.log( coin_id, coin_val );
                        $.each(coin_val, function (_key, _val) {
                            //console.log( coin_id +" *** " + crstartCoins.coins_margin_obj[coin_id] );

                            // console.log(_key, _val);
                            var _changepct24hourValueHolder = $('[data-coin-code="' + coin_id + '"] .changepct24hour .value');

                            var _trendClass = 'value-static';
                            if (+_val['CHANGEPCT24HOUR'] < 0) {
                                _trendClass = 'value-down'
                            }
                            if (+_val['CHANGEPCT24HOUR'] > 0) {
                                _trendClass = 'value-up'
                            }

                            _changepct24hourValueHolder.addClass(_trendClass);
                            $('[data-coin-code="' + coin_id + '"] .changepct24hour .value').html(_val['CHANGEPCT24HOUR']);

                            $('[data-coin-code="' + coin_id + '"] .low24hour .value').html(_val['LOW24HOUR']);
                            $('[data-coin-code="' + coin_id + '"] .high24hour .value').html(_val['HIGH24HOUR']);
                            $('[data-coin-code="' + coin_id + '"] .mktcap .value').html(_val['MKTCAP']);

                            // var _currency = answer.DISPLAY[_val.FROMSYMBOL][_key].TOSYMBOL;
                            // var _price = 1*(_val.PRICE) + (_val.PRICE/100) *crstartCoins.coins_margin_obj[coin_id];
                            // _price = 1*(_price.toFixed(4));
                            // $('[data-coin-code="'+coin_id+'"] .price').html(_currency +' '+_price);
                        });

                    });

                }
            });
        }
    }

});