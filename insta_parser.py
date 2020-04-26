#! /usr/local/bin/python3

import urllib.request

def dl_jpg(url, file_path, file_name):
    full_path = file_path + file_name +'.jpg'
    print(full_path)
    urllib.request.urlretrieve(url, full_path)
    
def get_urls(in_file, out_file):
    f = open(in_file, 'r')
    if f.mode == 'r':
        list = f.read().split(',')
        for i in range(len(list)):
            dl_jpg(list[i], 'imgs/', out_file + '_' + str(i))


#in_file = input('Enter filename with urls to download:')
in_file = 'urls_input.txt'
out_file = input('Enter filename to save as:')

get_urls(in_file, out_file)
