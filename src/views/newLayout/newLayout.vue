<template>
  <div class="newLayout">
    <el-container>
      <div class="aside">
        <div class="sliderLeft">
          <ul>
            <li
              v-for="(item, index) in list"
              :key="index"
              @click="showTwoLevel(item,index)"
              :class="oneActive==index?'activeitem':''"
            >
              <i :class="item.icon" style="font-size:22px"></i>
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        <transition name="slide-fade" mode="out-in">
          <div class="sliderRight" v-if="hasTwoLevel">
            <el-menu :default-active="twoLevelActiveId" class="el-menu-vertical-demo">
              <el-submenu
                :index="twoitem.id.toString()"
                v-if="twoitem.list && twoitem.list.length > 0"
                v-for="(twoitem,index) in twolist"
                :key="index"
              >
                <template slot="title">
                  <span>{{twoitem.name}}</span>
                </template>
                <el-menu-item
                  :index="threeitem.id.toString()"
                  v-for="(threeitem,index1) in twoitem.list"
                  :key="index1"
                >
                  <span slot="title">{{threeitem.name}}</span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                :index="twoitem.id.toString()"
                v-if="!twoitem.list"
                v-for="(twoitem,index) in twolist"
                :key="index"
              >
                <span slot="title">{{twoitem.name}}</span>
              </el-menu-item>
            </el-menu>
          </div>
        </transition>
      </div>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          checked: false,
          icon: "icon-shuju",
          id: 16522,
          level: 1,
          list: [
            {
              checked: false,
              id: 16523,
              level: 2,
              name: "店铺总览",
              parentId: 16522,
              path: "/home"
            },
            {
              checked: false,
              id: 16524,
              level: 2,
              name: "数据统计",
              parentId: 16522,
              path: "/Survey"
            },
            {
              checked: false,
              id: 16525,
              level: 2,
              name: "财务管理",
              parentId: 16522,
              path: "/money"
            }
          ],
          name: "数据"
        },
        {
          checked: false,
          icon: "icon-gerenzhongxin",
          id: 16526,
          level: 1,
          name: "账户"
        },
        {
          checked: false,
          icon: "icon-biaodan",
          id: 16529,
          level: 1,
          list: [
            {
              checked: false,
              id: 16530,
              level: 2,
              name: "小程序发布",
              parentId: 16529,
              path: "/codeVersion"
            },
            {
              checked: false,
              id: 16531,
              level: 2,
              name: "页面管理",
              parentId: 16529,
              path: "/diyPage"
            },
            {
              checked: false,
              id: 16532,
              level: 2,
              name: "模板消息",
              parentId: 16529,
              path: "/messageTemplate"
            },
            {
              checked: false,
              id: 16533,
              level: 2,
              name: "小程序跳转",
              parentId: 16529,
              path: "/smallProgramJump"
            },
            {
              checked: false,
              id: 16534,
              level: 2,
              name: "模板市场",
              parentId: 16529,
              path: "/diyTemplate"
            }
          ],
          name: "配置"
        },
        {
          checked: false,
          icon: "icon-shangcheng",
          id: 16535,
          level: 1,
          list: [
            {
              checked: false,
              id: 16536,
              level: 2,
              name: "分类管理",
              parentId: 16535,
              path: "/category"
            },
            {
              checked: false,
              id: 16537,
              level: 2,
              name: "商品分组",
              parentId: 16535,
              path: "/goodsGroup"
            },
            {
              checked: false,
              id: 16538,
              level: 2,
              name: "商品管理",
              parentId: 16535,
              path: "/goods"
            },
            {
              checked: false,
              id: 16539,
              level: 2,
              name: "订单管理",
              parentId: 16535,
              path: "/order"
            },
            {
              checked: false,
              id: 16540,
              level: 2,
              name: "评价管理",
              parentId: 16535,
              path: "/evaluate"
            },
            {
              checked: false,
              id: 16541,
              level: 2,
              name: "专题管理",
              parentId: 16535,
              path: "/specialList"
            },
            {
              checked: false,
              id: 16542,
              level: 2,
              name: "用户管理",
              parentId: 16535,
              path: "/customer"
            },
            {
              checked: false,
              icon: "",
              id: 16543,
              level: 2,
              name: "积分设置",
              parentId: 16535,
              path: "/IntegralConfig"
            },
            {
              checked: false,
              icon: "",
              id: 16544,
              level: 2,
              list: [
                {
                  checked: false,
                  icon: "",
                  id: 16545,
                  level: 3,
                  name: "会员卡",
                  parentId: 16544,
                  path: "/newMember"
                },
                {
                  checked: false,
                  icon: "",
                  id: 16546,
                  level: 3,
                  name: "会员商品",
                  parentId: 16544,
                  path: "/cardGoods"
                },
                {
                  checked: false,
                  icon: "",
                  id: 16547,
                  level: 3,
                  name: "会员管理",
                  parentId: 16544,
                  path: "/cardManage"
                }
              ],
              name: "会员系统",
              parentId: 16535,
              path: "/newMember"
            },
            {
              checked: false,
              id: 16548,
              level: 2,
              list: [
                {
                  checked: false,
                  id: 16549,
                  level: 3,
                  name: "运费模板",
                  parentId: 16548,
                  path: "/setFreight"
                },
                {
                  checked: false,
                  icon: "",
                  id: 16550,
                  level: 3,
                  name: "包邮设置",
                  parentId: 16548,
                  path: "/freeFreight"
                }
              ],
              name: "运费管理",
              parentId: 16535
            },
            {
              checked: false,
              id: 16551,
              level: 2,
              name: "门店列表",
              parentId: 16535,
              path: "/shopStores"
            },
            {
              checked: false,
              id: 16552,
              level: 2,
              name: "到店核销",
              parentId: 16535,
              path: "/verification"
            },
            {
              checked: false,
              id: 16553,
              level: 2,
              name: "退货地址",
              parentId: 16535,
              path: "/returnAddress"
            }
          ],
          name: "商城"
        },
        {
          checked: false,
          icon: "icon-yingxiao",
          id: 16554,
          level: 1,
          list: [
            {
              checked: false,
              id: 16555,
              level: 2,
              name: "拼团",
              parentId: 16554,
              path: "/collage"
            },
            {
              checked: false,
              id: 16556,
              level: 2,
              name: "秒杀",
              parentId: 16554,
              path: "/Seckill"
            },
            {
              checked: false,
              id: 16557,
              level: 2,
              name: "砍价",
              parentId: 16554,
              path: "/bargain"
            },
            {
              checked: false,
              id: 16558,
              level: 2,
              name: "优惠券",
              parentId: 16554,
              path: "/Coupon"
            },
            {
              checked: false,
              id: 16559,
              level: 2,
              name: "首页广告",
              parentId: 16554,
              path: "/openScreenAdvertising"
            }
          ],
          name: "营销"
        },
        {
          checked: false,
          icon: "icon-fenxiao",
          id: 16560,
          level: 1,
          list: [
            {
              checked: false,
              id: 16561,
              level: 2,
              name: "分销设置",
              parentId: 16560,
              path: "/distribution_config"
            },
            {
              checked: false,
              id: 16562,
              level: 2,
              name: "单品分销",
              parentId: 16560,
              path: "/distribution_item"
            },
            {
              checked: false,
              id: 16563,
              level: 2,
              name: "分销商管理",
              parentId: 16560,
              path: "/distribution_account"
            },
            {
              checked: false,
              id: 16564,
              level: 2,
              name: "分销订单",
              parentId: 16560,
              path: "/distribution_order"
            },
            {
              checked: false,
              id: 16565,
              level: 2,
              name: "提现管理",
              parentId: 16560,
              path: "/distribution_extract"
            }
          ],
          name: "分销"
        },
        {
          checked: false,
          icon: "icon-zhizuo",
          id: 16566,
          level: 1,
          list: [
            {
              checked: false,
              id: 16567,
              level: 2,
              name: "小票打印机",
              parentId: 16566,
              path: "/receiptsToPrint"
            },
            {
              checked: false,
              id: 16568,
              level: 2,
              name: "视频商品",
              parentId: 16566,
              path: "/singleVideo"
            },
            {
              checked: false,
              id: 16569,
              level: 2,
              name: "报名/预约",
              parentId: 16566,
              path: "/centerForm"
            },
            {
              checked: false,
              id: 16570,
              level: 2,
              name: "营销消息",
              parentId: 16566,
              path: "/marketingPush"
            },
            {
              checked: false,
              id: 16571,
              level: 2,
              list: [
                {
                  checked: false,
                  id: 16572,
                  level: 3,
                  name: "虚拟商品",
                  parentId: 16571,
                  path: "/virtualGoods"
                },
                {
                  checked: false,
                  id: 16573,
                  level: 3,
                  name: "商品分类",
                  parentId: 16571,
                  path: "/virtualCategory"
                },
                {
                  checked: false,
                  id: 16574,
                  level: 3,
                  name: "商品订单",
                  parentId: 16571,
                  path: "/virtualOrder"
                },
                {
                  checked: false,
                  id: 16575,
                  level: 3,
                  name: "会员管理",
                  parentId: 16571,
                  path: "/virtualCustomer"
                },
                {
                  checked: false,
                  id: 16576,
                  level: 3,
                  name: "会员套餐",
                  parentId: 16571,
                  path: "/virtualMemberPackage"
                },
                {
                  checked: false,
                  id: 16577,
                  level: 3,
                  name: "充值记录",
                  parentId: 16571,
                  path: "/virtualMemberPayRecord"
                }
              ],
              name: "虚拟商城",
              parentId: 16566
            },
            {
              checked: false,
              id: 16578,
              level: 2,
              list: [
                {
                  checked: false,
                  id: 16579,
                  level: 3,
                  name: "会员设置",
                  parentId: 16578,
                  path: "/mebConfig"
                },
                {
                  checked: false,
                  id: 16580,
                  level: 3,
                  name: "火售会员",
                  parentId: 16578,
                  path: "/huoshouMeb"
                },
                {
                  checked: false,
                  id: 16581,
                  level: 3,
                  name: "佣金统计",
                  parentId: 16578,
                  path: "/commissionStatistics"
                },
                {
                  checked: false,
                  id: 16582,
                  level: 3,
                  name: "商品列表",
                  parentId: 16578,
                  path: "/productList"
                },
                {
                  checked: false,
                  id: 16583,
                  level: 3,
                  name: "会员提现",
                  parentId: 16578,
                  path: "/cashManage"
                },
                {
                  checked: false,
                  id: 16584,
                  level: 3,
                  name: "发现管理",
                  parentId: 16578,
                  path: "/discover"
                }
              ],
              name: "会员分销",
              parentId: 16566
            },
            {
              checked: false,
              icon: "",
              id: 16585,
              level: 2,
              name: "公众号文章",
              parentId: 16566,
              path: "/publicArticle"
            },
            {
              checked: false,
              icon: "",
              id: 16586,
              level: 2,
              name: "ERP配置",
              parentId: 16566,
              path: "/erpConfig"
            },
            {
              checked: false,
              icon: "",
              id: 16587,
              level: 2,
              name: "底部logo",
              parentId: 16566,
              path: "/logoSupport"
            }
          ],
          name: "应用",
          path: ""
        }
      ],
      twolist: [],
      hasTwoLevel: false, //是否包含二级菜单
      oneActive: 0, //选中的当前一级菜单
      twoLevelActiveId: "" //当前选中二级菜单的id
    };
  },
  created(){
      this.showTwoLevel(this.list[0],0);
  },
  methods: {
    showTwoLevel(item, index) {
      this.oneActive = index;
      if (item.list && item.list.length > 0) {
        this.twolist = item.list;
        this.hasTwoLevel = true;
        this.twoLevelActiveId = item.list[0].id.toString();
      } else {
        this.hasTwoLevel = false;
      }
    },
    handleOpen() {},
    handleClose() {}
  }
};
</script>
<style lang="less">
.sliderRight {
  .el-submenu__title:focus,
  .el-submenu__title:hover {
    background-color: #fff !important;
  }
  .el-menu-item,
  .el-submenu__title {
    height: 50px !important;
  }
}
</style>
<style lang="less" scoped>
.el-menu {
  border: 0;
}
.el-menu-item span {
  padding: 5px;
  border-radius: 3px;
}
.el-submenu__title span {
  padding: 5px;
}

.el-menu-item:hover span {
  background-color: #e9e9e9;
}
.el-menu-item.is-active span {
  color: #333;
  background-color: #e9e9e9;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background: none;
}
.aside {
  color: #333;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  font-size: 14px;
  overflow: hidden;
}
.sliderLeft {
  width: 60px;
  height: 100%;
  background-color: #2179d4;
  text-align: center;
  color: #fff;
  z-index: 2;
}
.sliderLeft ul li {
  padding: 10px 0;
  cursor: pointer;
}
.sliderLeft ul li.activeitem {
  background: #196abd;
}

.sliderRight {
  width: 130px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #e3e3e3;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
  //   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-130px);
  opacity: 0;
}
</style>