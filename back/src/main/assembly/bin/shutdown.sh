#!/usr/bin/env bash

basepath=$(cd `dirname $0`; pwd)

piddir=${basepath}

pidname="swim"

stoptimeout=1

if [ "$piddir" = "" ]; then
    piddir=/tmp
fi
if [ ! -d "$piddir" ]; then
    echo "存储进程ID的目录${piddir}不存在"
    exit 0
fi
echo "piddir="${piddir}

pidfile=${piddir}/${pidname}".pid"
echo "pidfile=""$pidfile"

if [ -f $pidfile ]; then
    target_pid=`cat $pidfile`
    # 检查进程是否正在运行
    if kill -0 $target_pid > /dev/null 2>&1; then
        echo "正在停止"${pidname}

        kill $target_pid
        sleep $stoptimeout

        if kill -0 $target_pid > /dev/null 2>&1; then
            echo "$pidname did not stop gracefully after $stoptimeout seconds, killing with kill -9"
            kill -9 $target_pid
        else
            echo "${pidname}已停止"
        fi
    else
        echo "${pidname}没有运行"
    fi
else
    echo "${pidname}没有运行"
fi

exit 0