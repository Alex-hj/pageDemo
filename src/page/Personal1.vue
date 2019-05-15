<template>
    <div class="personal">
        <div class="info">   
            <div class="headImg">
                <img src="../assets/touxiang.jpg" alt="">
            </div>
            <div class="des">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
        </div>
        <div class="ino">
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
            <div>
                <div></div>
            </div>
        </div>
        <div class="exit">
            <el-button round>退出</el-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.personal{
    box-sizing: border-box;
    width:100%;
    padding:10px 15px;
    .info{
        position: relative;
        background:rgb(245, 239, 239);
        box-shadow: 0px 0px 3px rgb(211, 210, 210);
        width:100%;
        // border:1px solid red;
        border-radius: 10px;
        height:150px;
        .headImg{
            display: inline-block;
            margin-top:10px;
            margin-left:10px;
            width:130px;
            height:130px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width:100%;
                height:100%;
            }
        }
        .des{
            box-sizing: border-box;
            width:100%;
            height:100%;
            position: absolute;
            top:0px;
            padding:10px 0 10px 150px;
            >div{
                height:40px;
                display:inline-block;
                width:48%;
            }
        }
    }
    .ino{
        width:100%;
        font-size:0px;
        margin-top:20px;
        >div{
            display:inline-block;
            box-sizing: border-box;
            width:50%;
            height:60px;
            // border:1px solid red;
            margin-top:20px;
            text-align:center;
            >div{
                width:80%;
                height:100%;
                background:chocolate;
                display:inline-block;
                // box-sizing: border-box;
            }
        }
    }
    .exit{
        width:100%;
        padding:30px 0;
        .el-button{
            margin-left:136px;
        }

    }

}
</style>