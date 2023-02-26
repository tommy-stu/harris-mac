package com.example.demojwt;

public class Teacher {

    //属性name age

    //方法

    // 构造器 ==构造方法

    private String name;

    private int age;

    //想要哪种方式去创建这个对象
    //

    public Teacher(){

    }

    public Teacher(String name){//传参  类名

        //处理 this 当前类的实例
        this.name=name;//赋值
        System.out.println("项目="+name);


    }

    //  是什么  为什么  怎么做
    //  过程==》编码

    //方法:  权限控制：public privite   返回值：void  没有如何返回值；  带有返回值
     private void getName(){
        //处理 逻辑
     }

     public String getName(String name){
        //处理过程
         return this.name;
     }

     public static String getName(String name,Integer age){
        return name;
     }

    public static void main(String[] args) {


        //  阅读代码  线性执行  异步=》同步
         Teacher t1 =    new Teacher();
         t1.getName();
         new Teacher("陈老师");//new 过程
        //System.out.println(t2.name);




    }


}


