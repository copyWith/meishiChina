/**
 * Created by Administrator on 2017/8/20.
 */
$(function(){
    $('.m_choose_nav>li').click(function(){
        //$(this).addClass('checked').siblings().removeClass('checked');
        $('.m_tab_list').eq($(this).index()).fadeIn().siblings().fadeOut()
    })
})
