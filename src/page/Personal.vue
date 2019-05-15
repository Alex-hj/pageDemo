<template>
    <div class="personal">
        <div class="header">
            <div class="setAndAuthentication">
                <div class="authentication">
                    <i class="el-icon-circle-check"></i>
                    已认证
                </div>
                <div class="set">
                    <i class="el-icon-setting"></i>
                </div>
            </div>
            <div class="info">
                <img src="../assets/touxiang.jpg" alt="">
                <span class="userName">a</span>
                <span class="id">ID:1491799</span>
            </div>
        </div>
        <div class="option">
            <div>
                <i class="el-icon-star-off"></i>
                收藏</div>
            <div>
                <i class="el-icon-search"></i>
                帮助中心</div>
            <div>
                <i class="el-icon-edit-outline"></i>
                意见反馈</div>
            <div>
                <i class="el-icon-notebook-2"></i>
                用户协议</div>
            <div>
                <i class="el-icon-user"></i>
                关于我们</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.setAndAuthentication{
    width:100%;
    height:34px;
    background:rgb(153,102,51);
    display:flex;
    align-items: center;
    justify-content: space-between;
    color:#fff;
    .authentication{
        padding:2px 6px;
        font-size:12px;
        background:rgb(214, 147, 22);
        border-radius: 0 8px 8px 0;
    }
    .set{
        font-size:20px;
        margin-right:15px;
    }

}
.info{
    position: relative;
    background:rgb(153,102,51);
    height:220px;
    width:100%;
    text-align: center;
    display:flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    // border-bottom:1px solid red;
    img{
        margin-top:26px;
        width:80px;
        height:80px;
        // margin-left:-40px;
        // position: absolute;
        // top:35px;
        // left:50%;
        z-index: 10;
        border-radius: 50%;
    }
    .userName{
        margin-top:10px;
        z-index: 10;
    }
    .id{
        z-index:10;
        margin-top:10px;
        font-size:14px;
        color:rgb(194, 192, 192);
    }

    &:after{
        position: absolute;
        top:70px;
        left:-113px;
        content:"";
        width:600px;
        height:600px;
        background:#fff;
        border-radius: 50%;
    }
}
.option{
    margin-top:10px;
    width:100%;
    background:#fff;
    >div{
        box-sizing: border-box;
        width:100%;
        padding:10px 15px;
        border-bottom:2px solid #f6f6f6; 
    }
}

</style>