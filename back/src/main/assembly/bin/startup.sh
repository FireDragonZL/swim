#!/usr/bin/env bash

basepath=$(cd `dirname $0`; pwd)

piddir=${basepath}

pidname="swim"

runjar="lib/swim-1.0-SNAPSHOT.jar"

echo "runjar="${runjar}

if [ "$piddir" = "" ]; then
    piddir=/tmp
fi

if [ ! -d "$piddir" ]; then
    echo "存储进程ID的目录${piddir}不存在"
    exit 1
fi
echo "piddir="${piddir}

pidfile=${piddir}/${pidname}".pid"
echo "pidfile=""$pidfile"

if [ -f $pidfile ]; then
    # 检查进程是否正在运行
    if kill -0 `cat $pidfile` > /dev/null 2>&1; then
        echo $pidname"正在运行(pid=`cat $pidfile`), 请先停止进程！"
        exit 1
    fi
fi

stdout=${basepath}/nohup.out
> ${stdout}

nohup java -jar "${runjar}" "${basepath}" 2>&1 &

echo "$!" > $pidfile