<template>
    <el-container>
        <div v-if="show" id="widgetConfigDiv">
            <el-button @click="showData()">查看信息</el-button>
            <el-form label-position="left" label-width="80px">
                <div class="widget-cate" style="font-size: smaller;">基本属性</div>
                <div class="widget-cate" style="font-size: small;">基本属性</div>
                <div class="widget-cate" >基本属性</div>
                <div class="widget-cate" style="font-size: medium;">基本属性</div>
                <div class="widget-cate" style="font-size: large;">基本属性</div>
                <div class="widget-cate" style="font-size: larger;">基本属性</div>


                <el-form-item label="编号">
                    <el-input v-model="data.options.id" readonly="readonly"></el-input>
                </el-form-item>
                <el-form-item label="标题" v-if="data.type!='grid'">
                    <el-input v-model="data.name"></el-input>
                </el-form-item>
                <el-form-item label="占位内容"
                              v-if="Object.keys(data.options).indexOf('placeholder')>=0 && (data.type!='time' || data.type!='date')">
                    <el-input v-model="data.options.placeholder"></el-input>
                </el-form-item>
                <el-form-item label="提示内容">
                    <el-input v-model="data.options.tips"></el-input>
                </el-form-item>

                <div class="widget-cate">布局属性</div>
                <el-form-item label="标签宽度">
                    <el-input-number v-model="data.options.labelWidth" :min="0" :max="1000"
                                     :step="10"></el-input-number>
                </el-form-item>
                <el-form-item label="宽度" v-if="Object.keys(data.options).indexOf('width')>=0">
                    <el-input v-model="data.options.width"></el-input>

                </el-form-item>
                <el-form-item label="高度" v-if="Object.keys(data.options).indexOf('height')>=0">
                    <el-input v-model="data.options.height"></el-input>
                </el-form-item>
                <el-form-item label="大小" v-if="Object.keys(data.options).indexOf('size')>=0">
                    宽度：
                    <el-input style="width: 90px;" type="number" v-model.number="data.options.size.width"></el-input>
                    高度：
                    <el-input style="width: 90px;" type="number" v-model.number="data.options.size.height"></el-input>
                </el-form-item>
                <el-form-item label="背景色">
                    <el-color-picker v-model="data.options.bgColor"></el-color-picker>
                </el-form-item>
                <el-form-item label="字体颜色">
                    <el-color-picker v-model="data.options.color"></el-color-picker>
                </el-form-item>
                <el-form-item label="字体大小">
                    <el-select v-model="data.options.fontSize">
                        <el-option value="12px" label="小"></el-option>
                        <el-option value="14px" label="标准"></el-option>
                        <el-option value="16px" label="大"></el-option>
                        <el-option value="20px" label="巨大"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="字体加粗">
                    <el-switch v-model="data.options.fontWeight"></el-switch>
                </el-form-item>
                <el-form-item label="字体倾斜">
                    <el-switch v-model="data.options.fontIncline"></el-switch>
                </el-form-item>
                <el-form-item label="不可编辑">
                    <el-switch v-model="data.options.disabled"></el-switch>
                </el-form-item>
                <el-form-item label="数据可见">
                    <el-switch v-model="data.options.dataVisible"></el-switch>
                </el-form-item>
                <el-form-item label="提示可见">
                    <el-switch v-model="data.options.tipsVisible"></el-switch>
                </el-form-item>
                <el-form-item label="布局方式" v-if="Object.keys(data.options).indexOf('inline')>=0">
                    <el-radio-group v-model="data.options.inline">
                        <el-radio-button :label="false">块级</el-radio-button>
                        <el-radio-button :label="true">行内</el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="布局方式" v-if="data.type == 'label'">
                    <el-radio-group v-model="data.options.align">
                        <el-radio-button :label="left">左</el-radio-button>
                        <el-radio-button :label="middle">居中</el-radio-button>
                        <el-radio-button :label="right">右</el-radio-button>
                    </el-radio-group>
                </el-form-item>

                <div class="widget-cate">数据控制</div>
                <el-form-item label="公式" v-if="data.type=='dataFormula'">
                    <!--
                    <el-input v-model="data.options.formula"></el-input>
                    -->
                    <el-button @click="generateLogicalDialog(this.dataFormulaVisible)">生成公式</el-button>
                </el-form-item>
                <el-form-item label="公式" v-if="data.type=='pageLogical'">
                    <!--
                    <el-input v-model="data.options.formula"></el-input>
                    -->
                    <el-button @click="generateLogicalDialog(this.pageLogicalVisible)">生成公式</el-button>
                </el-form-item>
                <el-form-item label="默认值" v-if="Object.keys(data.options).indexOf('defaultValue')>=0">
                    <el-input v-if="data.type=='input' || data.type=='number' || data.type=='slider'"
                              v-model="data.options.defaultValue"></el-input>
                    <el-input v-if="data.type=='textarea'" type="textarea" :rows="5"
                              v-model="data.options.defaultValue"></el-input>
                    <el-rate v-if="data.type == 'rate'" style="display:inline-block;vertical-align: middle;"
                             :max="data.options.max" :allow-half="data.options.allowHalf"
                             v-model="data.options.defaultValue"></el-rate>
                    <el-button type="text" v-if="data.type == 'rate'"
                               style="display:inline-block;vertical-align: middle;margin-left: 10px;"
                               @click="data.options.defaultValue=0">清空
                    </el-button>
                    <el-color-picker v-if="data.type == 'color'" v-model="data.options.defaultValue"
                                     :show-alpha="data.options.showAlpha"></el-color-picker>
                    <el-switch v-if="data.type=='switch'" v-model="data.options.defaultValue"></el-switch>
                </el-form-item>
                <el-form-item label="最小值" v-if="Object.keys(data.options).indexOf('min')>=0">
                    <el-input-number v-model="data.options.min" :min="0" :max="100" :step="1"></el-input-number>
                </el-form-item>
                <el-form-item label="最大值" v-if="Object.keys(data.options).indexOf('max')>=0">
                    <el-input-number v-model="data.options.max" :min="0" :max="100" :step="1"></el-input-number>
                </el-form-item>
                <el-form-item label="小数位" v-if="data.type == 'number'">
                    <el-input-number v-model="data.options.precision" :min="0" :max="10" :step="1"></el-input-number>
                </el-form-item>
                <el-form-item label="步长" v-if="Object.keys(data.options).indexOf('step')>=0">
                    <el-input-number v-model="data.options.step" :min="0" :max="100" :step="1"></el-input-number>
                </el-form-item>
                <el-form-item label="数据查重">
                    <el-switch v-model="data.options.duplicateChecking"></el-switch>
                </el-form-item>
                <el-form-item label="查重规则" v-if="data.options.duplicateChecking">
                    <el-select v-model="data.options.checkRule">
                        <el-option value="0" label="等于"></el-option>
                        <el-option value="1" label="包含"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否图表">
                    <el-switch v-model="data.options.chart"></el-switch>
                </el-form-item>
                <el-form-item label="是否可导出">
                    <el-switch v-model="data.options.dataExport"></el-switch>
                </el-form-item>
                <el-form-item label="导出名称" v-if="data.options.dataExport">
                    <el-input v-model="data.options.exportName"></el-input>
                </el-form-item>
                <el-form-item label="显示输入框" v-if="Object.keys(data.options).indexOf('showInput')>=0">
                    <el-switch v-model="data.options.showInput"></el-switch>
                </el-form-item>
                <el-form-item label="是否多选" v-if="data.type=='select'">
                    <el-switch v-model="data.options.multiple" @change="handleSelectMuliple"></el-switch>
                </el-form-item>
                <el-form-item label="是否可搜索" v-if="data.type=='select'">
                    <el-switch v-model="data.options.filterable"></el-switch>
                </el-form-item>
                <el-form-item label="允许半选" v-if="Object.keys(data.options).indexOf('allowHalf')>=0">
                    <el-switch v-model="data.options.allowHalf"></el-switch>
                </el-form-item>
                <el-form-item label="支持透明度选择" v-if="Object.keys(data.options).indexOf('showAlpha')>=0">
                    <el-switch v-model="data.options.showAlpha"></el-switch>
                </el-form-item>
                <el-form-item label="是否显示标签" v-if="Object.keys(data.options).indexOf('showLabel')>=0">
                    <el-switch v-model="data.options.showLabel"></el-switch>
                </el-form-item>
                <el-form-item label="选项" v-if="Object.keys(data.options).indexOf('options')>=0">
                    <el-radio-group v-model="data.options.remote" size="mini" style="margin-bottom:10px;">
                        <el-radio-button :label="false">静态数据</el-radio-button>
                        <el-radio-button :label="true">远端数据</el-radio-button>
                    </el-radio-group>
                    <template v-if="data.options.remote">
                        <div>
                            <el-input size="mini" style="" v-model="data.options.remoteFunc">
                                <template slot="prepend">远端方法</template>
                            </el-input>
                            <el-input size="mini" style="" v-model="data.options.props.value">
                                <template slot="prepend">值</template>
                            </el-input>
                            <el-input size="mini" style="" v-model="data.options.props.label">
                                <template slot="prepend">标签</template>
                            </el-input>
                        </div>
                    </template>
                    <template v-else>
                        <el-button @click="openCollectionsDialog()">集合配置</el-button>
                        <!--
          <template v-if="data.type=='radio' || (data.type=='select'&&!data.options.multiple)">
            <el-radio-group v-model="data.options.defaultValue">
              <draggable tag="ul" :list="data.options.options" 
                v-bind="{group:{ name:'options'}, ghostClass: 'ghost',handle: '.drag-item'}"
                handle=".drag-item"
              >
                <li v-for="(item, index) in data.options.options" :key="index" >
                  <el-radio
                    :label="item.value" 
                    style="margin-right: 5px;"
                  >
                    <el-input :style="{'width': data.options.showLabel? '90px': '190px' }" size="mini" v-model="item.value"></el-input>
                    <el-input style="width:100px;" size="mini" v-if="data.options.showLabel" v-model="item.label"></el-input>
                    <!-\- <input v-model="item.value"/> -\->
                        </el-radio>
                        <i class="drag-item" style="font-size: 16px;margin: 0 5px;cursor: move;"><i
                                class="iconfont icon-icon_bars"></i></i>
                        <el-button @click="handleOptionsRemove(index)" circle plain type="danger" size="mini"
                                   icon="el-icon-minus" style="padding: 4px;margin-left: 5px;"></el-button>

                        </li>
                        </draggable>

                        </el-radio-group>
                    </template>

                    <template v-if="data.type=='checkbox' || (data.type=='select' && data.options.multiple)">
                        <el-checkbox-group v-model="data.options.defaultValue">

                            <draggable tag="ul" :list="data.options.options"
                                       v-bind="{group:{ name:'options'}, ghostClass: 'ghost',handle: '.drag-item'}"
                                       handle=".drag-item"
                            >
                                <li v-for="(item, index) in data.options.options" :key="index">
                                    <el-checkbox
                                            :label="item.value"
                                            style="margin-right: 5px;"
                                    >
                                        <el-input :style="{'width': data.options.showLabel? '90px': '190px' }"
                                                  size="mini" v-model="item.value"></el-input>
                                        <el-input style="width:100px;" size="mini" v-if="data.options.showLabel"
                                                  v-model="item.label"></el-input>
                                    </el-checkbox>
                                    <i class="drag-item" style="font-size: 16px;margin: 0 5px;cursor: move;"><i
                                            class="iconfont icon-icon_bars"></i></i>
                                    <el-button @click="handleOptionsRemove(index)" circle plain type="danger"
                                               size="mini" icon="el-icon-minus"
                                               style="padding: 4px;margin-left: 5px;"></el-button>

                                </li>
                            </draggable>
                        </el-checkbox-group>
                    </template>
                    <div style="margin-left: 22px;">
                        <el-button type="text" @click="handleAddOption">添加选项</el-button>
                    </div>
                    -->
                    </template>

                </el-form-item>

                <el-form-item label="远端数据" v-if="data.type=='cascader'">
                    <div>
                        <el-input size="mini" style="" v-model="data.options.remoteFunc">
                            <template slot="prepend">远端方法</template>
                        </el-input>
                        <el-input size="mini" style="" v-model="data.options.props.value">
                            <template slot="prepend">值</template>
                        </el-input>
                        <el-input size="mini" style="" v-model="data.options.props.label">
                            <template slot="prepend">标签</template>
                        </el-input>
                        <el-input size="mini" style="" v-model="data.options.props.children">
                            <template slot="prepend">子选项</template>
                        </el-input>
                    </div>
                </el-form-item>


                <template v-if="data.type == 'time' || data.type == 'date'">
                    <el-form-item label="日期类型" v-if="data.type == 'date'">
                        <el-select v-model="data.options.type" @change="optionTypeChange()">
                            <el-option value="year" label="年"></el-option>
                            <el-option value="month" label="年月"></el-option>
                            <el-option value="date" label="年月日"></el-option>
                            <el-option value="dates" label="多日期选择"></el-option>
                            <!-- <el-option value="week"></el-option> -->
                            <el-option value="daterange" label="日期范围选择"></el-option>
                            <el-option value="datetime" label="日期时间"></el-option>
                            <el-option value="datetimerange" label="日期时间范围选择"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="是否为范围选择" v-if="data.type == 'time'">
                        <el-switch v-model="data.options.isRange"></el-switch>
                    </el-form-item>
                    <el-form-item label="开始时间占位内容"
                                  v-if="(data.options.isRange) || data.options.type=='datetimerange' || data.options.type=='daterange'">
                        <el-input v-model="data.options.startPlaceholder"></el-input>
                    </el-form-item>
                    <el-form-item label="结束时间占位内容"
                                  v-if="data.options.isRange || data.options.type=='datetimerange' || data.options.type=='daterange'">
                        <el-input v-model="data.options.endPlaceholder"></el-input>
                    </el-form-item>
                    <el-form-item label="转化为时间戳" v-if="data.type == 'date'">
                        <el-switch v-model="data.options.timestamp"></el-switch>
                    </el-form-item>
                    <!--
                    <el-form-item label="格式">
                    <el-input v-model="data.options.format"></el-input>
                    </el-form-item>
                    <el-form-item label="默认值" v-if="data.type=='time' && Object.keys(data.options).indexOf('isRange')>=0">
                    <el-time-picker
                    key="1"
                    style="width: 100%;"
                    v-if="!data.options.isRange"
                    v-model="data.options.defaultValue"
                    :arrowControl="data.options.arrowControl"
                    :value-format="data.options.format"
                    >
                    </el-time-picker>
                    <el-time-picker
                    key="2"
                    v-if="data.options.isRange"
                    style="width: 100%;"
                    v-model="data.options.defaultValue"
                    is-range
                    :arrowControl="data.options.arrowControl"
                    :value-format="data.options.format"
                    >
                    </el-time-picker>
                    </el-form-item>
                    -->
                </template>

                <template v-if="data.type=='imgupload'">
                    <el-form-item label="最大上传数">
                        <el-input type="number" v-model.number="data.options.length"></el-input>
                    </el-form-item>
                    <el-form-item label="Domain" :required="true">
                        <el-input v-model="data.options.domain"></el-input>
                    </el-form-item>
                    <el-form-item label="获取七牛Token方法" :required="true">
                        <el-input v-model="data.options.tokenFunc"></el-input>
                    </el-form-item>
                </template>

                <template v-if="data.type=='blank'">
                    <el-form-item label="绑定数据类型">
                        <el-select v-model="data.options.defaultType">
                            <el-option value="String" label="字符"></el-option>
                            <el-option value="Object" label="对象"></el-option>
                            <el-option value="Array" label="数组"></el-option>
                        </el-select>
                    </el-form-item>
                </template>

                <template v-if="data.type == 'grid'">
                    <el-form-item label="栅格间隔">
                        <el-input type="number" v-model.number="data.options.gutter"></el-input>
                    </el-form-item>
                    <el-form-item label="列配置项">
                        <draggable tag="ul" :list="data.columns"
                                   v-bind="{group:{ name:'options'}, ghostClass: 'ghost',handle: '.drag-item'}"
                                   handle=".drag-item"
                        >
                            <li v-for="(item, index) in data.columns" :key="index">
                                <i class="drag-item" style="font-size: 16px;margin: 0 5px;cursor: move;"><i
                                        class="iconfont icon-icon_bars"></i></i>
                                <el-input placeholder="栅格值" size="mini" style="width: 100px;" type="number"
                                          v-model.number="item.span"></el-input>

                                <el-button @click="handleOptionsRemove(index)" circle plain type="danger" size="mini"
                                           icon="el-icon-minus" style="padding: 4px;margin-left: 5px;"></el-button>

                            </li>
                        </draggable>
                        <div style="margin-left: 22px;">
                            <el-button type="text" @click="handleAddColumn">添加列</el-button>
                        </div>
                    </el-form-item>
                    <el-form-item label="水平排列方式">
                        <el-select v-model="data.options.justify">
                            <el-option value="start" label="左对齐"></el-option>
                            <el-option value="end" label="右对齐"></el-option>
                            <el-option value="center" label="居中"></el-option>
                            <el-option value="space-around" label="两侧间隔相等"></el-option>
                            <el-option value="space-between" label="两端对齐"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="垂直排列方式">
                        <el-select v-model="data.options.align">
                            <el-option value="top" label="顶部对齐"></el-option>
                            <el-option value="middle" label="居中"></el-option>
                            <el-option value="bottom" label="底部对齐"></el-option>
                        </el-select>
                    </el-form-item>
                </template>

                <template v-if="data.type != 'grid'">
                    <el-form-item label="数据绑定Key">
                        <el-input v-model="data.model"></el-input>
                    </el-form-item>
                    <el-form-item label="操作属性">
                        <el-checkbox v-model="data.options.readonly"
                                     v-if="Object.keys(data.options).indexOf('readonly')>=0">完全只读
                        </el-checkbox>
                        <el-checkbox v-model="data.options.disabled"
                                     v-if="Object.keys(data.options).indexOf('disabled')>=0">禁用
                        </el-checkbox>
                        <el-checkbox v-model="data.options.editable"
                                     v-if="Object.keys(data.options).indexOf('editable')>=0">文本框可输入
                        </el-checkbox>
                        <el-checkbox v-model="data.options.clearable"
                                     v-if="Object.keys(data.options).indexOf('clearable')>=0">显示清除按钮
                        </el-checkbox>
                        <el-checkbox v-model="data.options.arrowControl"
                                     v-if="Object.keys(data.options).indexOf('arrowControl')>=0">
                            使用箭头进行时间选择
                        </el-checkbox>
                    </el-form-item>
                    <el-form-item label="校验">
                        <div>
                            <el-checkbox v-model="data.options.required">必填</el-checkbox>
                        </div>
                        <el-select v-if="Object.keys(data.options).indexOf('dataType')>=0"
                                   v-model="data.options.dataType" size="mini">
                            <el-option value="string" label="字符串"></el-option>
                            <el-option value="number" label="数字"></el-option>
                            <el-option value="boolean" label="布尔值"></el-option>
                            <el-option value="integer" label="整数"></el-option>
                            <el-option value="float" label="浮点数"></el-option>
                            <el-option value="url" label="URL地址"></el-option>
                            <el-option value="email" label="邮箱地址"></el-option>
                            <el-option value="hex" label="十六进制"></el-option>
                        </el-select>

                        <div v-if="Object.keys(data.options).indexOf('pattern')>=0">
                            <el-input size="mini" v-model.lazy="data.options.pattern" style=" width: 240px;"
                                      placeholder="填写正则表达式"></el-input>
                        </div>
                    </el-form-item>
                </template>
            </el-form>
        </div>
        <cus-dialog
                :visible="collectSetVisible"
                @on-close="collectSetVisible = false"
                title="集合设置"
                ref="collectSet"
                width="800px"
                form
                :action="false"
        >
            <div style="width: 100%;">
                <el-table
                        :data="data && data.options && data.options.options"
                        border
                        highlight-current-row
                        style="width: 100%">
                    <el-table-column
                            type="index"
                            label="序号"
                            align="center"
                            header-align="center"
                            width="50">
                    </el-table-column>
                    <el-table-column
                            prop="code"
                            label="编码"
                            align="center"
                            header-align="center"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="label"
                            label="文本"
                            align="center"
                            header-align="center"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="value"
                            label="分值"
                            align="center"
                            header-align="center"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="description"
                            label="描述"
                            align="center"
                            header-align="center">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            align="center"
                            header-align="center"
                            width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleRowEdit(scope.row)" type="text" size="small">修改</el-button>
                            <el-button @click="handleRowDelete(scope.row)" type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-card class="width:90%; margin-top:40px;">
                    <el-form>
                        <el-form-item label-width="40px" label="编码">
                            <el-input v-model="collectSet.code"></el-input>
                        </el-form-item>
                        <el-form-item label-width="40px" label="文本">
                            <el-input v-model="collectSet.label"></el-input>
                        </el-form-item>
                        <el-form-item label-width="40px" label="分支">
                            <el-input-number v-model="collectSet.value"></el-input-number>
                        </el-form-item>
                        <el-form-item label-width="40px" label="描述">
                            <el-input v-model="collectSet.description"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-button @click="saveCollectSet()">保存</el-button>
                    <el-button @click="resetCollectSet()">重置</el-button>
                </el-card>
                <div style="width:100%; text-align: center; margin: 10px 0px;">
                    <el-button @click="closeDialog()">关闭</el-button>
                </div>
            </div>
        </cus-dialog>
        <!-- 逻辑计算配置弹窗  -->
        <cus-dialog
                :visible="dataFormulaVisible"
                @on-close="dataFormulaVisible = false"
                title="逻辑计算"
                ref="PageLogical"
                width="800px"
                form
                :action="false"
        >
            <div style="width: 100%;">
                <el-card class="width:90%; margin-top:40px;">

                </el-card>
                <div style="width:100%; text-align: center; margin: 10px 0px;">
                    <el-button @click="closeDialog()">关闭</el-button>
                </div>

            </div>
        </cus-dialog>
        <!-- 页面逻辑配置弹窗  -->
        <cus-dialog
                :visible="pageLogicalVisible"
                @on-close="pageLogicalVisible = false"
                title="页面逻辑"
                ref="PageLogical"
                width="800px"
                form
                :action="false"
        >
            <div style="width: 100%;">
                <el-card class="width:90%; margin-top:40px;">

                </el-card>
                <div style="width:100%; text-align: center; margin: 10px 0px;">
                    <el-button @click="closeDialog()">关闭</el-button>
                </div>

            </div>
        </cus-dialog>
    </el-container>

</template>

<script>
    import Draggable from 'vuedraggable'
    import ElColorPickerDropdown from "element-ui/packages/color-picker/src/components/picker-dropdown";
    import CusDialog from './CusDialog'

    export default {
        components: {
            ElColorPickerDropdown,
            Draggable,
            CusDialog
        },
        props: ['data', 'form'],
        data() {
            return {
                collectSetVisible: false,       //控制集合设置弹窗显示
                dataFormulaVisible: false,   //控制逻辑计算弹窗显示
                pageLogicalVisible: false,   //控制页面逻辑弹窗显示
                validator: {
                    type: null,
                    required: null,
                    pattern: null,
                    range: null,
                    length: null
                },
                collectSetEdit: false,
                collectSet: {
                    code: 1,
                    label: '',
                    value: 0.0,
                    description: ''
                },
            }
        },
        computed: {

            show() {
                if (this.data && Object.keys(this.data).length > 0) {
                    //this.data.options.labelWidth = 200;
                    return true;
                }
                return false
            }
        },
        mounted() {
        },
        methods: {
            showData(){
              console.log(this.data);
            },
            generateLogicalDialog(obj) {
                obj = true;
            },
            generateLogical() {

            },
            handleRowEdit(row) {    // 处理集合的行操作
                this.collectSet = row;
            },
            handleRowDelete(row) {    // 处理集合的行删除
                //console.log(this.data.options.options);
            },
            closeDialog() {
                this.collectSetVisible = false;
                this.resetCollectSet();
            },
            openCollectionsDialog() {   // 打开集合设置的对话框
                this.collectSetVisible = true;

                if (this.data.options.options.length > 0) {
                    this.collectSet.code = this.data.options.options[this.data.options.options.length - 1].code + 1;
                } else {
                    this.collectSet.code = 1;
                }
            },
            resetCollectSet() {
                this.collectSet = {
                    code: this.data.options ? 1 : this.data.options.options[this.data.options.options.length - 1].code + 1,
                    label: '',
                    value: 0.0,
                    description: ''
                };
            },
            saveCollectSet() {   // 集合项保存
                if (this.collectSet.label.trim() == '') {
                    alert('文本内容不能为空！');
                    return;
                }

                let find = false
                this.data.options.options.forEach(item => {
                    console.log(this.collectSet.code + "=====" + item.code);
                    if (this.collectSet.code == item.code) {
                        item.label = this.collectSet.label;
                        item.value = this.collectSet.value;
                        item.description = this.collectSet.description;
                        find = true;
                    }
                });
                if (!find) {
                    this.data.options.options.push(this.collectSet);
                }
                this.data.options.options.sort((a, b) => {
                    return a.code - b.code;
                })
                this.resetCollectSet();
            },
            optionTypeChange() {
                'year', 'month', 'date', 'dates', 'daterange', 'datetime', 'datetimerange'
                if (this.data.options.type == 'year') {
                    this.data.options.format = 'yyyy';
                } else if (this.data.options.type == 'month') {
                    this.data.options.format = 'yyyy-MM';
                } else if (this.data.options.type == 'datetime' || this.data.options.type == 'datetimerange') {
                    this.data.options.format = 'yyyy-MM-dd HH:mm:ss';
                } else {
                    this.data.options.format = 'yyyy-MM-dd';
                }
            },
            handleOptionsRemove(index) {
                if (this.data.type === 'grid') {
                    this.data.columns.splice(index, 1)
                } else {
                    this.data.options.options.splice(index, 1)
                }

            },
            handleAddOption() {
                if (this.data.options.showLabel) {
                    this.data.options.options.push({
                        value: '新选项',
                        label: '新选项'
                    })
                } else {
                    this.data.options.options.push({
                        value: '新选项'
                    })
                }

            },
            handleAddColumn() {
                this.data.columns.push({
                    span: '',
                    list: []
                })
            },
            generateRule() {
                this.data.rules = []
                Object.keys(this.validator).forEach(key => {
                    if (this.validator[key]) {
                        this.data.rules.push(this.validator[key])
                    }
                })
            },
            handleSelectMuliple(value) {
                if (value) {
                    if (this.data.options.defaultValue) {
                        this.data.options.defaultValue = [this.data.options.defaultValue]
                    } else {
                        this.data.options.defaultValue = []
                    }

                } else {
                    if (this.data.options.defaultValue.length > 0) {
                        this.data.options.defaultValue = this.data.options.defaultValue[0]
                    } else {
                        this.data.options.defaultValue = ''
                    }

                }
            }
        },
        watch: {
            'data.options.isRange': function (val) {
                if (typeof val !== 'undefined') {
                    if (val) {
                        this.data.options.defaultValue = null
                    } else {
                        if (Object.keys(this.data.options).indexOf('defaultValue') >= 0)
                            this.data.options.defaultValue = ''
                    }
                }
            },
            'data.options.required': function (val) {
                if (val) {
                    this.validator.required = {required: true, message: `${this.data.name}必须填写`}
                } else {
                    this.validator.required = null
                }

                this.$nextTick(() => {
                    this.generateRule()
                })
            },
            'data.options.dataType': function (val) {
                if (!this.show) {
                    return false
                }

                if (val) {
                    this.validator.type = {type: val, message: this.data.name + '格式不正确'}
                } else {
                    this.validator.type = null
                }

                this.generateRule()
            },
            'data.options.pattern': function (val) {
                if (!this.show) {
                    return false
                }

                if (val) {
                    this.validator.pattern = {pattern: val, message: this.data.name + '格式不匹配'}
                } else {
                    this.validator.pattern = null
                }

                this.generateRule()
            }
        }
    }
</script>

<style lang="scss" scoped>
    #widgetConfigDiv {
        .el-form-item {
            border-bottom: solid 0px #e1e1e1;
            margin-bottom: 0px;
            padding-bottom: 5px;
        }
    }

    .widget-cate {
        border-bottom: solid 1px #e1e1e1;
        padding-bottom: 5px;
        margin-bottom: 10px;
        margin-top: 5px;
    }

</style>
