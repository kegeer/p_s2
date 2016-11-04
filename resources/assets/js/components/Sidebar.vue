<template lang="html">
    <div class="left side-menu">
                <div class="sidebar-inner slimescrollleft">

                    <div id="sidebar-menu">
                  	<ul>
                  		<li class="menu-title">样本</li>
                  		<li class="has_sub">
                  			<a href="javascript:void(0);" class="waves-effect">
                  				<i class="mdi mdi-archive"></i>
                  				<span>样本管理</span>
                  				<span class="menu-arrow"></span>
                  			</a>
                  			<ul class="list-unstyled">
                                <router-link :to="{name: 'batches'}" tag="li" activeClass="active" exact>
                                    <a>所有批次</a>
                                </router-link>
                                <router-link :to="{name: 'create.batch'}" tag="li" activeClass="active" exact>
                                    <a>新增批次</a>
                                </router-link>
                  				<li>
                  					<a href="#">所有客户</a>
                  				</li>
                  			</ul>
                  		</li>
                  		<li class="menu-title">项目</li>
                  		<li class="has_sub">
                  			<a href="javascript:void(0);" class="waves-effect">
                  				<i class="mdi mdi-file-multiple"></i>
                  				<span>项目管理</span>
                  				<span class="menu-arrow"></span>
                  			</a>


                  			<ul class="list-unstyled">
                  				<li><a href="#">所有项目</a></li>
                  				<li><a href="#">新建项目</a></li>
                  				<li><a href="#">子任务管理</a></li>
                  			</ul>
                  		</li>

                  		<li class="menu-title">实验</li>
                  		<li class="has_sub">
                  			<a href="javascript:void(0);" class="waves-effect">
                  				<i class="mdi mdi-test-tube"></i>
                  				<span>实验管理</span>
                  				<span class="menu-arrow"></span>
                  			</a>


                  			<ul class="list-unstyled">

                  				<li><a href="#">所有实验</a></li>
                  			</ul>
                  		</li>
                  		<li class="menu-title">结果</li>
                  		<li class="has_sub">
                  			<a href="javascript:void(0);" class="waves-effect">
                  				<i class="mdi mdi-invert-colors"></i>
                  				<span>数据管理</span>
                  				<span class="menu-arrow"></span>
                  			</a>


                  			<ul class="list-unstyled">
                  				<li><a href="#">数据审核</a></li>
                  				<li><a href="#">结果报告</a></li>
                  			</ul>
                  		</li>

                  		<li>
                  	        <a href="#" class="waves-effect">
                  		        <i class="mdi mdi-calendar"></i>
                  		        <span>备用链接</span>
                  	        </a>
                  	    </li>
                  	</ul>
                  </div>

                    <div class="clearfix"></div>
                </div>
            </div>

</template>

<script>
export default {}
</script>
