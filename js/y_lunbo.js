$(function () {
    var height = 640;  //ͼƬ�߶�
    var speed = 700;   //����ʱ��
    var delay = 1500;   //�Զ��л�
    var now = 0;     //��ǰͼƬ������
    var max = 5;     //�������
    var $imgs = $('.y_lunbo-imgs');   //��ȡ����
    //���Ƶ�һ��ͼƬ׷�ӵ��б����
    $imgs.find('li:first').clone().appendTo($imgs);
    function changeAuto() {
        if (!$imgs.is(':animated')) {
            if (now < max) {
                now += 1;
                changeNext();
            } else {
                now = 0;
                changeFirst();
            }
        }
    }

    //�л�����һ��
    function changeNext() {
        $imgs.animate({'left': -height * now}, speed)
    }

    //�л�����һ��ͼƬ
    function changeFirst() {
        $imgs.animate({
            left: -height * (max + 1)
        }, speed, function () {
            $(this).css('left', '0')
        })
    }

    var $lunboNum = $('.y_lunbo-num li');

    $lunboNum.click(function () {
        var x = now;
        now = $(this).index();
        if (x < now) {
            $imgs.css({left: -height * (now - 1) + "px"});
            changeNext();
        }
        else if (x > now) {
            $imgs.css({left: -height * (now + 1) + "px"});
            changeNext();
        }
        changeNum();
    })
    $('.y_prev').click(function () {
        if (!$imgs.is(':animated')) {
            if (now <= 0) {
                now = max;
                $imgs.css({
                    left: -height * (max + 1)
                })
            } else {
                now--;
            }
            changeNext();
        }
    });
    $('.y_next').click(function () {
        changeAuto()
    });
})