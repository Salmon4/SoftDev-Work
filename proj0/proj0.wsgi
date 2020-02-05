#!/usr/bin/python3
import sys
sys.path.insert(0,"/var/www/proj0/")
sys.path.insert(0,"/var/www/proj0/proj0/")

import logging
logging.basicConfig(stream=sys.stderr)

from proj0 import app as application
