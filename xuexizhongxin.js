<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>学习中心 - 说文解字AR</title>
    <!-- 公共依赖 -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    
    <!-- Tailwind配置（与首页一致） -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#E63946',
                        secondary: '#1D3557',
                        create: '#722ed1',
                        animate: '#13c2c2',
                        game: '#fa541c',
                        ar: '#1890ff',
                        shop: '#36cfc9',
                        neutral: '#F1FAEE',
                        dark: '#1D3557',
                    },
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                        chinese: ['"思源黑体"', '"Noto Sans SC"', 'sans-serif'],
                    },
                }
            }
        }
    </script>
    
    <!-- 公共工具类（与首页一致） -->
    <style type="text/tailwindcss">
        @layer utilities {
            .text-shadow { text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
            .card-hover { transition: all 0.3s ease; }
            .card-hover:hover { transform: translateY(-5px); box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); }
            .animate-fade-in { animation: fadeIn 0.8s ease-in-out; }
            @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        }
    </style>
</head>

<body class="bg-neutral font-chinese text-dark">
    <!-- 引入公共头部 -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>$(function(){ $("#navbar-container").load("../common/header.html"); });</script>
    <div id="navbar-container"></div>

    <!-- 学习中心核心内容区 -->
    <section class="pt-32 pb-20">
        <div class="container mx-auto px-4">
            <!-- 页面标题 -->
            <div class="text-center mb-16 animate-fade-in">
                <h2 class="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-4 text-animate">分级学习中心</h2>
                <p class="text-dark/70 max-w-2xl mx-auto">对应中文四六级/HSK等级，从基础到高阶，系统掌握汉字与文化</p>
            </div>

            <!-- 分级学习体系 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <!-- 初级 -->
                <div class="bg-white rounded-xl shadow-md p-8 card-hover border-t-4 border-animate">
                    <div class="w-16 h-16 bg-animate/10 rounded-full flex items-center justify-center mb-6">
                        <i class="fa fa-book text-animate text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-semibold mb-4">初级（HSK 1-2级）</h3>
                    <p class="text-dark/70 mb-6">聚焦高频汉字、日常口语场景，适合零基础学习者快速入门</p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-start">
                            <i class="fa fa-check text-animate mt-1 mr-3"></i>
                            <span>300个核心高频汉字</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-check text-animate mt-1 mr-3"></i>
                            <span>日常交流口语训练</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-check text-animate mt-1 mr-3"></i>
                            <span>基础汉字AR动画学习</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-check text-animate mt-1 mr-3"></i>
                            <span>拼音与发音矫正</span>
                        </li>
                    </ul>
                    <a href="javascript:;" class="block w-full text-center bg-animate/10 text-animate hover:bg-animate/20 transition-colors px-6 py-3 rounded-lg font-medium">
                        开始学习 <i class="fa fa-arrow-right ml-2"></i>
                    </a>
                </div>

                <!-- 中级 -->
                <div class="bg-white rounded-xl shadow-md p-8 card-hover border-t-4 border-animate">
                    <div class="w-16 h-16 bg-animate/10 rounded-full flex items-center justify-center mb-6">
                        <i class="fa fa-briefcase text-animate text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-semibold mb-4">中级（HSK 3-4级）</h3>
                    <p class="text-dark/70 mb-6">覆盖商务、场景化词汇，提升汉字应用能力，适配留学/工作需求</p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-start">
                            <i class="fa fa-check text-animate mt-1 mr-3"></i>
                            <span>800个场景化词汇</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-check text-animate mt-1 mr-3"></i>
                            <span>商务/旅行中文对话</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-check text-animate mt-1 mr-3"></i>
                            <span>汉字文化背景解析</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-check text-animate mt-1 mr-3"></i>
                            <span>听说读写综合训练</span>
                        </li>
                    </ul>
                    <a href="javascript:;" class="block w-full text-center bg-animate/10 text-animate hover:bg-animate/20 transition-colors px-6 py-3 rounded-lg font-medium">
                        开始学习 <i class="fa fa-arrow-right ml-2"></i>
                    </a>
                </div>

                <!-- 高级 -->
                <div class="bg-white rounded-xl shadow-md p-8 card-hover border-t-4 border-animate">
                    <div class="w-16 h-16 bg-animate/10 rounded-full flex items-center justify-center mb-6">
                        <i class="fa fa-graduation-cap text-animate text-3xl"></i>
                    </div>
                    <h3 class="text-2xl font-semibold mb-4">高级（HSK 5-6级）</h3>
                    <p class="text-dark/70 mb-6">专业领域词汇与文化研究，深入理解汉字内涵，适配学术/文化工作</p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-start">
                            <i class="fa fa-check text-animate mt-1 mr-3"></i>
                            <span>1500个专业领域词汇</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-check text-animate mt-1 mr-3"></i>
                            <span>《说文解字》深度解读</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-check text-animate mt-1 mr-3"></i>
                            <span>古典文献与诗词赏析</span>
                        </li>
                        <li class="flex items-start">
                            <i class="fa fa-check text-animate mt-1 mr-3"></i>
                            <span>学术写作与翻译训练</span>
                        </li>
                    </ul>
                    <a href="javascript:;" class="block w-full text-center bg-animate/10 text-animate hover:bg-animate/20 transition-colors px-6 py-3 rounded-lg font-medium">
                        开始学习 <i class="fa fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>

            <!-- 核心功能模块 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <!-- AR字源动画学习 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div class="p-8 flex flex-col justify-center">
                            <h3 class="text-2xl font-semibold mb-4 text-animate">AR字源动画学习</h3>
                            <p class="text-dark/70 mb-6">通过3D互动动画，直观感受汉字从甲骨文到楷书的演变过程，加深记忆</p>
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start">
                                    <i class="fa fa-check-circle text-animate mt-1 mr-3"></i>
                                    <span>1000+汉字AR动画资源</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fa fa-check-circle text-animate mt-1 mr-3"></i>
                                    <span>互动练习与即时反馈</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fa fa-check-circle text-animate mt-1 mr-3"></i>
                                    <span>离线下载学习</span>
                                </li>
                            </ul>
                            <a href="javascript:;" class="inline-block bg-animate hover:opacity-90 text-white px-6 py-3 rounded-lg transition-colors">
                                探索AR动画 <i class="fa fa-magic ml-2"></i>
                            </a>
                        </div>
                        <div class="relative">
                            <img src="https://picsum.photos/id/237/600/400" alt="AR字源动画" class="w-full h-full object-cover">
                            <div class="absolute inset-0 flex items-center justify-center">
                                <button class="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center text-animate hover:bg-white transition-colors">
                                    <i class="fa fa-play text-2xl"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 说文解字数据库 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div class="relative order-2 md:order-1">
                            <img src="https://picsum.photos/id/180/600/400" alt="说文解字数据库" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 flex flex-col justify-center order-1 md:order-2">
                            <h3 class="text-2xl font-semibold mb-4 text-animate">《说文解字》数据库</h3>
                            <p class="text-dark/70 mb-6">完整收录《说文解字》原文，结合现代释义，提供汉字的形、音、义、文化背景全解析</p>
                            <ul class="space-y-3 mb-6">
                                <li class="flex items-start">
                                    <i class="fa fa-check-circle text-animate mt-1 mr-3"></i>
                                    <span>汉字释义与演变轨迹</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fa fa-check-circle text-animate mt-1 mr-3"></i>
                                    <span>文化背景与典故查询</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fa fa-check-circle text-animate mt-1 mr-3"></i>
                                    <span>听说读写综合训练</span>
                                </li>
                            </ul>
                            <a href="javascript:;" class="inline-block bg-animate hover:opacity-90 text-white px-6 py-3 rounded-lg transition-colors">
                                访问数据库 <i class="fa fa-book ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 个人学习工具 -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white rounded-xl shadow-md p-8 card-hover">
                    <div class="w-14 h-14 bg-animate/10 rounded-full flex items-center justify-center text-animate text-2xl mb-4">
                        <i class="fa fa-times-circle"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">错题本</h3>
                    <p class="text-dark/70 mb-4">自动收录错题，智能推荐相似题型，针对性巩固薄弱知识点</p>
                    <a href="javascript:;" class="text-animate hover:underline inline-flex items-center">
                        查看错题 <i class="fa fa-angle-right ml-1"></i>
                    </a>
                </div>

                <div class="bg-white rounded-xl shadow-md p-8 card-hover">
                    <div class="w-14 h-14 bg-animate/10 rounded-full flex items-center justify-center text-animate text-2xl mb-4">
                        <i class="fa fa-line-chart"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">学习进度追踪</h3>
                    <p class="text-dark/70 mb-4">实时记录学习时长、掌握汉字数量，生成个性化学习报告</p>
                    <a href="javascript:;" class="text-animate hover:underline inline-flex items-center">
                        查看报告 <i class="fa fa-angle-right ml-1"></i>
                    </a>
                </div>

                <div class="bg-white rounded-xl shadow-md p-8 card-hover">
                    <div class="w-14 h-14 bg-animate/10 rounded-full flex items-center justify-center text-animate text-2xl mb-4">
                        <i class="fa fa-lightbulb-o"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-2">知识点巩固推荐</h3>
                    <p class="text-dark/70 mb-4">基于学习进度，智能推荐需复习的汉字和相关练习</p>
                    <a href="javascript:;" class="text-animate hover:underline inline-flex items-center">
                        开始复习 <i class="fa fa-angle-right ml-1"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- 引入公共底部 -->
    <script>$(function(){ $("#footer-container").load("../common/footer.html"); });</script>
    <div id="footer-container"></div>

    <!-- 引入公共JS -->
    <script src="../common/common.js"></script>

    <!-- 学习中心专属JS（可选，如加载课程列表） -->
    <script>
        // 页面加载后获取课程列表（示例）
        window.onload = function() {
            // 继承公共JS的onload逻辑
            if (window.commonOnLoad) commonOnLoad();
            
            // 加载初级课程列表
            api.learning.getCoursesByLevel(1).then(res => {
                console.log('初级课程列表：', res);
                // 后续可渲染到页面
            }).catch(err => {
                console.log('课程加载失败：', err);
            });
        };
    </script>
</body>
</html>