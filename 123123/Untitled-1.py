# %%
import numpy as np
import pandas as pd
# 数据文件地址
data=pd.read_excel(r'C:\Users\江东大宝\Desktop\2016-2022年城区空气质量指数.xlsx')
data

# %%
# 数据预处理
# 将数据中0替换成缺失值
data=data.replace(0,np.NaN)

# 提取年月
data['年']=data['日期'].apply(lambda x:x.year)
month=data['日期'].apply(lambda x:x.month)
# 设定划分季度
quarter_month={'1':'一季度','2':'一季度','3':'一季度',
               '4':'二季度','5':'二季度','6':'二季度',
               '7':'三季度','8':'三季度','9':'三季度',
              '10':'四季度','11':'四季度','12':'四季度'}
data['季度']=month.map(lambda x:quarter_month[str(x)])
# 划分空气质量等级
bins=[0,50,100,150,200,300,1000]
data['等级']=pd.cut(data['空气质量指数'],bins,labels=['一级优','二级良','三级轻度污染','四级中度污染','五级重度污染','六级严重污染'])
print('对AQI的分组结果：\n{0}'.format(data[['日期','空气质量指数','等级','季度']]))
data

# %%
# 储存预处理完毕的数据集
data.to_excel((r'C:\Users\江东大宝\Desktop\2016-2022年城区空气质量指数_预处理完毕.xlsx'), sheet_name='Sheet1', index=False)

# %%
# 解决打印对不齐
# 将不明确的全角字符宽度视为双倍宽度。默认值为False。
pd.set_option('display.unicode.ambiguous_as_wide', True)
# 将全角字符视为双倍宽度，半角字符视为单倍宽度。默认值为False。
pd.set_option('display.unicode.east_asian_width', True)
# 设置打印宽度
pd.set_option('display.width', 200)

# %%
print('各季度空气质量指数和可吸入颗粒物的描述统计量:\n',data.groupby(data['季度'])[['空气质量指数','可吸入颗粒物']].apply(lambda x:x.describe()))

# %%
# 对空气质量指数列的数据进行降序排列，然后返回前n个（这里n=10）
def top(df,n=10,column='空气质量指数'):
    return df.sort_values(by=column,ascending=False)[:n] 

# %%
print('空气质量最差的5天:\n',top(data,n=5)[['日期','空气质量指数','可吸入颗粒物','等级']])

# %%
print('各季度空气质量最差的3天:\n',data.groupby(data['季度']).apply(lambda x:top(x,n=3)[['日期','空气质量指数','可吸入颗粒物','等级']]))

# %%
print('各季度空气质量情况:\n',pd.crosstab(data['等级'],data['季度'],margins=True,margins_name='总计',normalize=False))

# %%
# 得到分类变量'等级'的哑变量,生成一个二值变量
pd.get_dummies(data['等级'])
# 数据添加
data.join(pd.get_dummies(data['等级']))

# %%
# 简单随机抽样
# 随机数种子
np.random.seed(0)
# 指定范围抽取10个
sampler=np.random.randint(0,len(data),10)
print("简单随机抽样如下：")
print(sampler)
data.take(sampler)

# %%
# 随机打乱取前十个
print("重新打乱抽样结果如下：")
sampler=np.random.permutation(len(data))[:10]
print(sampler)
data.take(sampler)

# %%
# 条件抽样
print("条件抽样结果如下：")
data.loc[data['等级']=='二级良',:]

# %%
data

# %%
# 绘图
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
%matplotlib inline

# 用来正常显示中文标签
plt.rcParams['font.sans-serif']=['SimHei'] 
# 用来正常显示负号
plt.rcParams['axes.unicode_minus']=False

# 导入数据
data=pd.read_excel(r'C:\Users\江东大宝\Desktop\2016-2022年城区空气质量指数_预处理完毕.xlsx')
# 创建图形
plt.figure(figsize=(10,5))
# 绘制空气质量折线
plt.plot(data['空气质量指数'],color='black',linestyle='-',linewidth=0.5)
# 空气质量平均值
plt.axhline(y=data['空气质量指数'].mean(),color='red', linestyle='-',linewidth=0.5,label='空气质量指数总平均值')
# 提取年
data['年']=data['日期'].apply(lambda x:x.year)
# 提取空气质量年平均
AQI_mean=data['空气质量指数'].groupby(data['年']).mean().values
# 设定颜色
year=['2016年','2017年','2018年','2019年','2020年','2021年','2022年']
col=['red','orange','yellow','green','blue','cyan','purple']
# 绘制每年平均
for i in range(7):
    plt.axhline(y=AQI_mean[i],color=col[i], linestyle='--',linewidth=0.5,label=year[i])

# 标题 坐标轴
plt.title('2016至2022气质量指数时间序列折线图')
plt.xlabel('年份')
plt.ylabel('空气质量指数')
# 设定所有数据都会被显示
plt.xlim(xmax=len(data), xmin=1)
plt.ylim(ymax=data['空气质量指数'].max(),ymin=1)
# 添加文本
plt.yticks([data['空气质量指数'].mean()],['空气质量指数总平均值'])
plt.xticks([1,365,365*2,365*3,365*4,365*5,365*6],['2016年','2017年','2018年','2019年','2020年','2021年','2022年'])
# 添加图例
plt.legend(loc='best')
# 标出空气质量最差的一天
plt.text(x=list(data['空气质量指数']).index(data['空气质量指数'].max()),y=data['空气质量指数'].max()-20,s='空气质量最差日',color='red')

# %%
# 添加绘图
%matplotlib inline
# 控制忽略所有警告信息
import warnings
warnings.filterwarnings(action = 'ignore')

# 设定大小 划分区域
plt.figure(figsize=(10,10))

# 左上折线图
plt.subplot(2,2,1)
plt.plot(AQI_mean,color='black',linestyle='-',linewidth=0.5)
plt.title('各年空气质量指数总平均值')
plt.xticks([0, 1, 2, 3, 4, 5, 6],['2016年','2017年','2018年','2019年','2020年','2021年','2022年'])

# 右上直方图
plt.subplot(2,2,2)
plt.hist(data['空气质量指数'], bins=20)
plt.title('空气质量指数直方图')

# 左下散点图
plt.subplot(2,2,3)
plt.scatter(data['可吸入颗粒物'],data['空气质量指数'],s=0.5,c='green',marker='.')
plt.title('可吸入颗粒物与空气质量指数散点图')
plt.xlabel('可吸入颗粒物')
plt.ylabel('空气质量指数')

# 右下饼图
plt.subplot(2,2,4)
tmp=pd.value_counts(data['等级'],sort=False)  #等同：tmp=data['质量等级'].value_counts()
share=tmp/sum(tmp)
labels=tmp.index
explode = [0, 0, 0, 0, 0,0]
plt.pie(share, explode = explode,labels = labels, autopct = '%3.1f%%',startangle = 180, shadow = True)
plt.title('空气质量整体情况的饼图')

# %%
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA

# 用来正常显示中文标签
plt.rcParams['font.sans-serif']=['SimHei'] 
# 用来正常显示负号
plt.rcParams['axes.unicode_minus']=False

# 读取Excel文件并转换为时间序列
df = pd.read_excel(r'C:\Users\江东大宝\Desktop\2016-2022年城区空气质量指数_预处理完毕.xlsx')
df['日期'] = pd.to_datetime(df['日期'])
df_data = df[['日期', '空气质量指数']]
df_data.set_index('日期', inplace=True)

# 将时间序列数据转换为带有固定日度频率的形式
df_data_daily = df_data.resample('D').mean()

# 绘制AQI时间序列图
plt.plot(df_data)
plt.xlabel('日期')
plt.ylabel('空气质量指数')
plt.title('历史数据')
plt.show()


# 拟合ARIMA模型并进行预测
model = ARIMA(df_data_daily, order=(1, 1, 1))
results = model.fit()
forecast = results.forecast(steps=365)  # 预测未来365天的数据

# 显示预测结果
print(forecast)

plt.plot(forecast)
plt.xlabel('日期')
plt.ylabel('空气质量指数')
plt.title('未来一年的空气质量指数预测')
plt.show()

# %%
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.statespace.sarimax import SARIMAX

# 用来正常显示中文标签
plt.rcParams['font.sans-serif']=['SimHei'] 
# 用来正常显示负号
plt.rcParams['axes.unicode_minus']=False

# 读取Excel文件并转换为时间序列
df = pd.read_excel(r'C:\Users\江东大宝\Desktop\2016-2022年城区空气质量指数_预处理完毕.xlsx')
df['日期'] = pd.to_datetime(df['日期'])
df_data = df[['日期', '空气质量指数']]
df_data.set_index('日期', inplace=True)

# 将时间序列数据转换为带有固定日度频率的形式
df_data_daily = df_data.resample('D').mean()

# 绘制AQI时间序列图
plt.plot(df_data)
plt.xlabel('日期')
plt.ylabel('空气质量指数')
plt.title('历史数据')
plt.show()

# 拟合SARIMA模型并进行预测
model = SARIMAX(df_data_daily, order=(1, 1, 1), seasonal_order=(1, 0, 1, 120))
results = model.fit()
forecast = results.forecast(steps=365)  # 预测未来365天的数据

# 显示预测结果7
print(forecast)


# 绘制AQI时间序列图
plt.plot(forecast)
plt.xlabel('日期')
plt.ylabel('空气质量指数')
plt.title('未来一年的空气质量指数预测')
plt.show()

# %%



