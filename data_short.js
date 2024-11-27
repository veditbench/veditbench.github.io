const demoData = [
{
    originalVideo: "VEditBench-Short/animal_0020/input.mp4",
    category: "Animal",
    originalCaption: "A seal is being fed a fish by a person",
    editTypes: {
        'motion-change': {
            editPrompt: "Move the camera right to left.",
            targetPrompt: "The camera moves from right to left as a seal is being fed a fish by a person.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0020/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0020/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0020/motion_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0020/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0020/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0020/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0020/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0020/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.2909,
                    metric_2: 0.2004,
                    metric_3: 0.9099,
                    metric_4: 0.5432,
                    metric_5: 0.5519,
                    metric_6: 0.238,
                    metric_7: 0.6792,
                    metric_8: 0.9715
                },
                method2: {
                    metric_1: 29.1066,
                    metric_2: 0.2884,
                    metric_3: 0.9108,
                    metric_4: 0.8074,
                    metric_5: 0.477,
                    metric_6: 0.1872,
                    metric_7: 0.5806,
                    metric_8: 0.9732
                },
                method3: {
                    metric_1: 17.429,
                    metric_2: 0.0745,
                    metric_3: 0.9333,
                    metric_4: 0.7334,
                    metric_5: 0.3235,
                    metric_6: 0.0737,
                    metric_7: 0.4836,
                    metric_8: 0.9781
                },
                method4: {
                    metric_1: 29.0261,
                    metric_2: 0.2873,
                    metric_3: 0.9272,
                    metric_4: 0.7382,
                    metric_5: 0.4105,
                    metric_6: 0.1597,
                    metric_7: 0.5464,
                    metric_8: 0.9759
                },
                method5: {
                    metric_1: 25.5914,
                    metric_2: 0.2465,
                    metric_3: 0.9611,
                    metric_4: 0.9351,
                    metric_5: 0.6671,
                    metric_6: 0.2384,
                    metric_7: 0.6426,
                    metric_8: 0.9644
                },
                method6: {
                    metric_1: 29.8165,
                    metric_2: 0.2694,
                    metric_3: 0.85,
                    metric_4: 0.6686,
                    metric_5: 0.6108,
                    metric_6: 0.2218,
                    metric_7: 0.6821,
                    metric_8: 0.9644
                },
                method7: {
                    metric_1: 28.7142,
                    metric_2: 0.24,
                    metric_3: 0.8963,
                    metric_4: 0.468,
                    metric_5: 0.4506,
                    metric_6: 0.1335,
                    metric_7: 0.5327,
                    metric_8: 0.9092
                },
                method8: {
                    metric_1: 26.4773,
                    metric_2: 0.2701,
                    metric_3: 0.8355,
                    metric_4: 0.5657,
                    metric_5: 0.5152,
                    metric_6: 0.3001,
                    metric_7: 0.7295,
                    metric_8: 0.9706
                }
            }
        },
        'object-change': {
            editPrompt: "Change the seal to a dolphin.",
            targetPrompt: "A dolphin is being fed a fish by a person.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0020/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0020/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0020/object_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0020/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0020/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0020/object_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0020/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0020/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.8165,
                    metric_2: 0.2734,
                    metric_3: 0.9107,
                    metric_4: 0.4735,
                    metric_5: 0.6911,
                    metric_6: 0.3036,
                    metric_7: 0.7607,
                    metric_8: 0.9662
                },
                method2: {
                    metric_1: 25.1938,
                    metric_2: 0.2467,
                    metric_3: 0.9162,
                    metric_4: 0.7831,
                    metric_5: 0.397,
                    metric_6: 0.1357,
                    metric_7: 0.5566,
                    metric_8: 0.9651
                },
                method3: {
                    metric_1: 25.4291,
                    metric_2: 0.2632,
                    metric_3: 0.9351,
                    metric_4: 0.7751,
                    metric_5: 0.7282,
                    metric_6: 0.3666,
                    metric_7: 0.7935,
                    metric_8: 0.9636
                },
                method4: {
                    metric_1: 26.0947,
                    metric_2: 0.2628,
                    metric_3: 0.946,
                    metric_4: 0.7168,
                    metric_5: 0.427,
                    metric_6: 0.1672,
                    metric_7: 0.5757,
                    metric_8: 0.9662
                },
                method5: {
                    metric_1: 21.9889,
                    metric_2: 0.1827,
                    metric_3: 0.9331,
                    metric_4: 0.5972,
                    metric_5: 0.7552,
                    metric_6: 0.5754,
                    metric_7: 0.8247,
                    metric_8: 0.9539
                },
                method6: {
                    metric_1: 27.9649,
                    metric_2: 0.2699,
                    metric_3: 0.8306,
                    metric_4: 0.6296,
                    metric_5: 0.6628,
                    metric_6: 0.2659,
                    metric_7: 0.6992,
                    metric_8: 0.9616
                },
                method7: {
                    metric_1: 27.9818,
                    metric_2: 0.3119,
                    metric_3: 0.8283,
                    metric_4: 0.4959,
                    metric_5: 0.4315,
                    metric_6: 0.1302,
                    metric_7: 0.519,
                    metric_8: 0.901
                },
                method8: {
                    metric_1: 28.3607,
                    metric_2: 0.2936,
                    metric_3: 0.8258,
                    metric_4: 0.5276,
                    metric_5: 0.508,
                    metric_6: 0.2765,
                    metric_7: 0.7061,
                    metric_8: 0.9677
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a group of seagulls watching nearby.",
            targetPrompt: "A seal is being fed a fish by a man while a group of seagulls watches nearby.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0020/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0020/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0020/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/animal_0020/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0020/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0020/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/animal_0020/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0020/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.0235,
                    metric_2: 0.2343,
                    metric_3: 0.8927,
                    metric_4: 0.5042,
                    metric_5: 0.6159,
                    metric_6: 0.2389,
                    metric_7: 0.7603,
                    metric_8: 0.9674
                },
                method2: {
                    metric_1: 23.8501,
                    metric_2: 0.2069,
                    metric_3: 0.9176,
                    metric_4: 0.7521,
                    metric_5: 0.3853,
                    metric_6: 0.1642,
                    metric_7: 0.5029,
                    metric_8: 0.9633
                },
                method3: {
                    metric_1: 20.3609,
                    metric_2: 0.1932,
                    metric_3: 0.9513,
                    metric_4: 0.8242,
                    metric_5: 0.429,
                    metric_6: 0.2062,
                    metric_7: 0.6016,
                    metric_8: 0.9647
                },
                method4: {
                    metric_1: 20.7484,
                    metric_2: 0.2048,
                    metric_3: 0.9119,
                    metric_4: 0.5938,
                    metric_5: 0.2149,
                    metric_6: 0.0558,
                    metric_7: 0.3013,
                    metric_8: 0.9531
                },
                method5: {
                    metric_1: 23.0148,
                    metric_2: 0.2758,
                    metric_3: 0.9529,
                    metric_4: 0.7495,
                    metric_5: 0.655,
                    metric_6: 0.3632,
                    metric_7: 0.6943,
                    metric_8: 0.9562
                },
                method6: {
                    metric_1: 26.1993,
                    metric_2: 0.2717,
                    metric_3: 0.8868,
                    metric_4: 0.6255,
                    metric_5: 0.498,
                    metric_6: 0.1561,
                    metric_7: 0.6465,
                    metric_8: 0.9558
                },
                method7: {
                    metric_1: 25.8521,
                    metric_2: 0.2483,
                    metric_3: 0.8235,
                    metric_4: 0.3612,
                    metric_5: 0.5336,
                    metric_6: 0.2523,
                    metric_7: 0.6289,
                    metric_8: 0.8648
                },
                method8: {
                    metric_1: 25.9865,
                    metric_2: 0.2547,
                    metric_3: 0.8004,
                    metric_4: 0.5162,
                    metric_5: 0.5386,
                    metric_6: 0.2809,
                    metric_7: 0.7051,
                    metric_8: 0.9747
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the seal",
            targetPrompt: "A person's hand is holding a fish",
            resultVideos: {
                method1: "VEditBench-Short/animal_0020/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0020/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0020/object_removal/flatten.mp4",
                method4: "VEditBench-Short/animal_0020/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0020/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0020/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/animal_0020/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0020/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.1009,
                    metric_2: 0.2314,
                    metric_3: 0.9117,
                    metric_4: 0.5224,
                    metric_5: 0.5443,
                    metric_6: 0.2013,
                    metric_7: 0.6763,
                    metric_8: 0.9718
                },
                method2: {
                    metric_1: 23.2288,
                    metric_2: 0.2299,
                    metric_3: 0.9134,
                    metric_4: 0.7696,
                    metric_5: 0.6454,
                    metric_6: 0.3064,
                    metric_7: 0.7646,
                    metric_8: 0.9714
                },
                method3: {
                    metric_1: 16.6443,
                    metric_2: 0.0842,
                    metric_3: 0.9037,
                    metric_4: 0.6622,
                    metric_5: 0.1853,
                    metric_6: 0.1834,
                    metric_7: 0.2664,
                    metric_8: 0.9746
                },
                method4: {
                    metric_1: 20.2105,
                    metric_2: 0.2086,
                    metric_3: 0.9181,
                    metric_4: 0.7718,
                    metric_5: 0.517,
                    metric_6: 0.2132,
                    metric_7: 0.668,
                    metric_8: 0.9672
                },
                method5: {
                    metric_1: 17.8117,
                    metric_2: 0.1421,
                    metric_3: 0.9735,
                    metric_4: 0.9238,
                    metric_5: 0.6974,
                    metric_6: 0.2643,
                    metric_7: 0.6978,
                    metric_8: 0.9631
                },
                method6: {
                    metric_1: 26.5932,
                    metric_2: 0.2452,
                    metric_3: 0.8647,
                    metric_4: 0.6957,
                    metric_5: 0.6875,
                    metric_6: 0.3362,
                    metric_7: 0.7798,
                    metric_8: 0.9668
                },
                method7: {
                    metric_1: 26.932,
                    metric_2: 0.2509,
                    metric_3: 0.7083,
                    metric_4: 0.3834,
                    metric_5: 0.3297,
                    metric_6: 0.2874,
                    metric_7: 0.7529,
                    metric_8: 0.8672
                },
                method8: {
                    metric_1: 25.0632,
                    metric_2: 0.245,
                    metric_3: 0.8314,
                    metric_4: 0.5889,
                    metric_5: 0.4492,
                    metric_6: 0.2191,
                    metric_7: 0.6528,
                    metric_8: 0.9709
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it take place in an oceanarium.",
            targetPrompt: "A seal is being fed a fish by a person in an oceanarium.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0020/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0020/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0020/scene_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0020/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0020/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0020/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0020/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0020/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.153,
                    metric_2: 0.2843,
                    metric_3: 0.916,
                    metric_4: 0.5052,
                    metric_5: 0.5861,
                    metric_6: 0.2808,
                    metric_7: 0.7524,
                    metric_8: 0.9679
                },
                method2: {
                    metric_1: 30.8778,
                    metric_2: 0.3161,
                    metric_3: 0.9389,
                    metric_4: 0.7549,
                    metric_5: 0.6029,
                    metric_6: 0.2761,
                    metric_7: 0.7383,
                    metric_8: 0.9633
                },
                method3: {
                    metric_1: 26.8212,
                    metric_2: 0.2947,
                    metric_3: 0.951,
                    metric_4: 0.7815,
                    metric_5: 0.5231,
                    metric_6: 0.2976,
                    metric_7: 0.6631,
                    metric_8: 0.9604
                },
                method4: {
                    metric_1: 29.2472,
                    metric_2: 0.2985,
                    metric_3: 0.9387,
                    metric_4: 0.6668,
                    metric_5: 0.4847,
                    metric_6: 0.2147,
                    metric_7: 0.6665,
                    metric_8: 0.9631
                },
                method5: {
                    metric_1: 26.4676,
                    metric_2: 0.2844,
                    metric_3: 0.963,
                    metric_4: 0.7023,
                    metric_5: 0.6068,
                    metric_6: 0.2843,
                    metric_7: 0.6899,
                    metric_8: 0.957
                },
                method6: {
                    metric_1: 29.5354,
                    metric_2: 0.3089,
                    metric_3: 0.8092,
                    metric_4: 0.6677,
                    metric_5: 0.6898,
                    metric_6: 0.2814,
                    metric_7: 0.7578,
                    metric_8: 0.9657
                },
                method7: {
                    metric_1: 30.8895,
                    metric_2: 0.3201,
                    metric_3: 0.8232,
                    metric_4: 0.3637,
                    metric_5: 0.5233,
                    metric_6: 0.259,
                    metric_7: 0.6855,
                    metric_8: 0.8787
                },
                method8: {
                    metric_1: 27.8413,
                    metric_2: 0.3013,
                    metric_3: 0.8368,
                    metric_4: 0.5602,
                    metric_5: 0.4874,
                    metric_6: 0.2593,
                    metric_7: 0.6846,
                    metric_8: 0.9715
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Retro style",
            targetPrompt: "A seal is being fed a fish by a person, depicted in a Retro style",
            resultVideos: {
                method1: "VEditBench-Short/animal_0020/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0020/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0020/stylization/flatten.mp4",
                method4: "VEditBench-Short/animal_0020/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0020/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0020/stylization/pix2video.mp4",
                method7: "VEditBench-Short/animal_0020/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0020/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.6742,
                    metric_2: 0.2553,
                    metric_3: 0.9187,
                    metric_4: 0.5558,
                    metric_5: 0.56,
                    metric_6: 0.2047,
                    metric_7: 0.6914,
                    metric_8: 0.9752
                },
                method2: {
                    metric_1: 19.9423,
                    metric_2: 0.1545,
                    metric_3: 0.9059,
                    metric_4: 0.7021,
                    metric_5: 0.2401,
                    metric_6: 0.1792,
                    metric_7: 0.4512,
                    metric_8: 0.9838
                },
                method3: {
                    metric_1: 14.9138,
                    metric_2: 0.0867,
                    metric_3: 0.9195,
                    metric_4: 0.6749,
                    metric_5: 0.2009,
                    metric_6: 0.095,
                    metric_7: 0.3865,
                    metric_8: 0.9821
                },
                method4: {
                    metric_1: 16.5541,
                    metric_2: 0.0953,
                    metric_3: 0.7932,
                    metric_4: 0.6621,
                    metric_5: 0.1473,
                    metric_6: 0.1561,
                    metric_7: 0.3794,
                    metric_8: 0.9875
                },
                method5: {
                    metric_1: 20.7915,
                    metric_2: 0.2355,
                    metric_3: 0.9685,
                    metric_4: 0.8679,
                    metric_5: 0.5877,
                    metric_6: 0.2214,
                    metric_7: 0.6226,
                    metric_8: 0.9615
                },
                method6: {
                    metric_1: 17.6268,
                    metric_2: 0.1243,
                    metric_3: 0.7764,
                    metric_4: 0.5997,
                    metric_5: 0.2332,
                    metric_6: 0.2042,
                    metric_7: 0.5073,
                    metric_8: 0.9852
                },
                method7: {
                    metric_1: 25.0406,
                    metric_2: 0.2005,
                    metric_3: 0.8385,
                    metric_4: 0.4438,
                    metric_5: 0.5152,
                    metric_6: 0.2485,
                    metric_7: 0.5483,
                    metric_8: 0.9038
                },
                method8: {
                    metric_1: 21.8178,
                    metric_2: 0.2376,
                    metric_3: 0.803,
                    metric_4: 0.5716,
                    metric_5: 0.494,
                    metric_6: 0.2595,
                    metric_7: 0.6826,
                    metric_8: 0.9674
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/animal_0022/input.mp4",
    category: "Animal",
    originalCaption: "A orange cat getting up from floor and walking on its hind legs",
    editTypes: {
        'motion-change': {
            editPrompt: "Tilt the camera downwards.",
            targetPrompt: "Tilt the camera downwards to capture the orange cat getting up from the floor and walking on its hind legs.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0022/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0022/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0022/motion_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0022/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0022/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0022/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0022/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0022/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.8805,
                    metric_2: 0.1989,
                    metric_3: 0.873,
                    metric_4: 0.4814,
                    metric_5: 0.6508,
                    metric_6: 0.4171,
                    metric_7: 0.8838,
                    metric_8: 0.9574
                },
                method2: {
                    metric_1: 22.8589,
                    metric_2: 0.2047,
                    metric_3: 0.8712,
                    metric_4: 0.8493,
                    metric_5: 0.4927,
                    metric_6: 0.2595,
                    metric_7: 0.5171,
                    metric_8: 0.9789
                },
                method3: {
                    metric_1: 22.7688,
                    metric_2: 0.1793,
                    metric_3: 0.8398,
                    metric_4: 0.7146,
                    metric_5: 0.135,
                    metric_6: 0.0135,
                    metric_7: 0.1974,
                    metric_8: 0.9818
                },
                method4: {
                    metric_1: 24.304,
                    metric_2: 0.2038,
                    metric_3: 0.8838,
                    metric_4: 0.86,
                    metric_5: 0.4067,
                    metric_6: 0.1544,
                    metric_7: 0.4456,
                    metric_8: 0.9716
                },
                method5: {
                    metric_1: 22.1652,
                    metric_2: 0.1533,
                    metric_3: 0.8755,
                    metric_4: 0.5968,
                    metric_5: 0.246,
                    metric_6: 0.205,
                    metric_7: 0.3857,
                    metric_8: 0.96
                },
                method6: {
                    metric_1: 25.4925,
                    metric_2: 0.2301,
                    metric_3: 0.8435,
                    metric_4: 0.7298,
                    metric_5: 0.2667,
                    metric_6: 0.0687,
                    metric_7: 0.4204,
                    metric_8: 0.9757
                },
                method7: {
                    metric_1: 22.9225,
                    metric_2: 0.2313,
                    metric_3: 0.8776,
                    metric_4: 0.4849,
                    metric_5: 0.2317,
                    metric_6: 0.0425,
                    metric_7: 0.2803,
                    metric_8: 0.9494
                },
                method8: {
                    metric_1: 24.943,
                    metric_2: 0.2398,
                    metric_3: 0.87,
                    metric_4: 0.6122,
                    metric_5: 0.5164,
                    metric_6: 0.3231,
                    metric_7: 0.6851,
                    metric_8: 0.955
                }
            }
        },
        'object-change': {
            editPrompt: "Change the cat to a rabbit.",
            targetPrompt: "A rabbit getting up from the floor and walking on its hind legs.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0022/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0022/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0022/object_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0022/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0022/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0022/object_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0022/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0022/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.373,
                    metric_2: 0.2545,
                    metric_3: 0.8629,
                    metric_4: 0.517,
                    metric_5: 0.6282,
                    metric_6: 0.3115,
                    metric_7: 0.834,
                    metric_8: 0.9661
                },
                method2: {
                    metric_1: 25.7362,
                    metric_2: 0.2476,
                    metric_3: 0.8616,
                    metric_4: 0.8519,
                    metric_5: 0.2951,
                    metric_6: 0.1068,
                    metric_7: 0.3848,
                    metric_8: 0.9761
                },
                method3: {
                    metric_1: 22.3934,
                    metric_2: 0.2577,
                    metric_3: 0.8308,
                    metric_4: 0.7537,
                    metric_5: 0.2371,
                    metric_6: 0.1792,
                    metric_7: 0.4551,
                    metric_8: 0.9641
                },
                method4: {
                    metric_1: 26.5361,
                    metric_2: 0.2503,
                    metric_3: 0.8649,
                    metric_4: 0.8633,
                    metric_5: 0.3635,
                    metric_6: 0.1515,
                    metric_7: 0.4365,
                    metric_8: 0.9667
                },
                method5: {
                    metric_1: 23.7566,
                    metric_2: 0.2558,
                    metric_3: 0.8737,
                    metric_4: 0.8698,
                    metric_5: 0.7047,
                    metric_6: 0.4112,
                    metric_7: 0.8286,
                    metric_8: 0.9626
                },
                method6: {
                    metric_1: 24.27,
                    metric_2: 0.2513,
                    metric_3: 0.8545,
                    metric_4: 0.7693,
                    metric_5: 0.3142,
                    metric_6: 0.1203,
                    metric_7: 0.4407,
                    metric_8: 0.9718
                },
                method7: {
                    metric_1: 23.9173,
                    metric_2: 0.2382,
                    metric_3: 0.8735,
                    metric_4: 0.6101,
                    metric_5: 0.3097,
                    metric_6: 0.1434,
                    metric_7: 0.4697,
                    metric_8: 0.9562
                },
                method8: {
                    metric_1: 25.0654,
                    metric_2: 0.2738,
                    metric_3: 0.871,
                    metric_4: 0.648,
                    metric_5: 0.4648,
                    metric_6: 0.2396,
                    metric_7: 0.5869,
                    metric_8: 0.9619
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a string toy near the cat.",
            targetPrompt: "A orange cat is getting up from the floor and walking on its hind legs toward a string toy nearby.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0022/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0022/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0022/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/animal_0022/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0022/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0022/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/animal_0022/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0022/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.2276,
                    metric_2: 0.2351,
                    metric_3: 0.8625,
                    metric_4: 0.4981,
                    metric_5: 0.6961,
                    metric_6: 0.4431,
                    metric_7: 0.8662,
                    metric_8: 0.9586
                },
                method2: {
                    metric_1: 27.8276,
                    metric_2: 0.2739,
                    metric_3: 0.8736,
                    metric_4: 0.8511,
                    metric_5: 0.4836,
                    metric_6: 0.3096,
                    metric_7: 0.6084,
                    metric_8: 0.9743
                },
                method3: {
                    metric_1: 19.4087,
                    metric_2: 0.1223,
                    metric_3: 0.8499,
                    metric_4: 0.7515,
                    metric_5: 0.5393,
                    metric_6: 0.2834,
                    metric_7: 0.73,
                    metric_8: 0.9528
                },
                method4: {
                    metric_1: 27.5268,
                    metric_2: 0.2367,
                    metric_3: 0.8775,
                    metric_4: 0.8527,
                    metric_5: 0.4498,
                    metric_6: 0.2105,
                    metric_7: 0.5239,
                    metric_8: 0.9679
                },
                method5: {
                    metric_1: 24.8236,
                    metric_2: 0.2365,
                    metric_3: 0.882,
                    metric_4: 0.928,
                    metric_5: 0.3282,
                    metric_6: 0.0863,
                    metric_7: 0.4031,
                    metric_8: 0.9672
                },
                method6: {
                    metric_1: 26.4206,
                    metric_2: 0.2449,
                    metric_3: 0.8438,
                    metric_4: 0.6717,
                    metric_5: 0.264,
                    metric_6: 0.134,
                    metric_7: 0.5146,
                    metric_8: 0.9729
                },
                method7: {
                    metric_1: 23.1827,
                    metric_2: 0.2121,
                    metric_3: 0.8729,
                    metric_4: 0.4904,
                    metric_5: 0.2216,
                    metric_6: 0.0985,
                    metric_7: 0.29,
                    metric_8: 0.9355
                },
                method8: {
                    metric_1: 26.16,
                    metric_2: 0.2631,
                    metric_3: 0.8704,
                    metric_4: 0.623,
                    metric_5: 0.4704,
                    metric_6: 0.2965,
                    metric_7: 0.563,
                    metric_8: 0.9569
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the cat.",
            targetPrompt: "A video of a floor",
            resultVideos: {
                method1: "VEditBench-Short/animal_0022/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0022/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0022/object_removal/flatten.mp4",
                method4: "VEditBench-Short/animal_0022/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0022/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0022/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/animal_0022/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0022/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 17.9813,
                    metric_2: 0.114,
                    metric_3: 0.8692,
                    metric_4: 0.5229,
                    metric_5: 0.6263,
                    metric_6: 0.2685,
                    metric_7: 0.6904,
                    metric_8: 0.9668
                },
                method2: {
                    metric_1: 21.0738,
                    metric_2: 0.142,
                    metric_3: 0.8776,
                    metric_4: 0.8329,
                    metric_5: 0.4781,
                    metric_6: 0.2852,
                    metric_7: 0.5337,
                    metric_8: 0.9794
                },
                method3: {
                    metric_1: 19.8378,
                    metric_2: 0.176,
                    metric_3: 0.812,
                    metric_4: 0.7077,
                    metric_5: 0.3348,
                    metric_6: 0.3077,
                    metric_7: 0.4121,
                    metric_8: 0.9789
                },
                method4: {
                    metric_1: 19.3295,
                    metric_2: 0.1341,
                    metric_3: 0.8707,
                    metric_4: 0.8604,
                    metric_5: 0.4653,
                    metric_6: 0.2353,
                    metric_7: 0.5234,
                    metric_8: 0.9755
                },
                method5: {
                    metric_1: 18.0178,
                    metric_2: 0.1198,
                    metric_3: 0.8777,
                    metric_4: 0.944,
                    metric_5: 0.3297,
                    metric_6: 0.0846,
                    metric_7: 0.3862,
                    metric_8: 0.9682
                },
                method6: {
                    metric_1: 21.8028,
                    metric_2: 0.2022,
                    metric_3: 0.8484,
                    metric_4: 0.7376,
                    metric_5: 0.2351,
                    metric_6: 0.1304,
                    metric_7: 0.3428,
                    metric_8: 0.9824
                },
                method7: {
                    metric_1: 21.7066,
                    metric_2: 0.1906,
                    metric_3: 0.8607,
                    metric_4: 0.6279,
                    metric_5: 0.3412,
                    metric_6: 0.0337,
                    metric_7: 0.4255,
                    metric_8: 0.9878
                },
                method8: {
                    metric_1: 19.4695,
                    metric_2: 0.1839,
                    metric_3: 0.8253,
                    metric_4: 0.2671,
                    metric_5: 0.3329,
                    metric_6: 0.2328,
                    metric_7: 0.479,
                    metric_8: 0.9726
                }
            }
        },
        'scene-change': {
            editPrompt: "Place it in a grassy field.",
            targetPrompt: "An orange cat is getting up from the floor and walking on its hind legs in a grassy field.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0022/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0022/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0022/scene_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0022/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0022/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0022/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0022/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0022/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.1897,
                    metric_2: 0.219,
                    metric_3: 0.8646,
                    metric_4: 0.4564,
                    metric_5: 0.7099,
                    metric_6: 0.4662,
                    metric_7: 0.8081,
                    metric_8: 0.9566
                },
                method2: {
                    metric_1: 25.8328,
                    metric_2: 0.2506,
                    metric_3: 0.8552,
                    metric_4: 0.7564,
                    metric_5: 0.4936,
                    metric_6: 0.2938,
                    metric_7: 0.6719,
                    metric_8: 0.9728
                },
                method3: {
                    metric_1: 19.8053,
                    metric_2: 0.1173,
                    metric_3: 0.8433,
                    metric_4: 0.6035,
                    metric_5: 0.1059,
                    metric_6: 0.4074,
                    metric_7: 0.2205,
                    metric_8: 0.9766
                },
                method4: {
                    metric_1: 27.6671,
                    metric_2: 0.2555,
                    metric_3: 0.8702,
                    metric_4: 0.7992,
                    metric_5: 0.5021,
                    metric_6: 0.2712,
                    metric_7: 0.6367,
                    metric_8: 0.9657
                },
                method5: {
                    metric_1: 20.3763,
                    metric_2: 0.1218,
                    metric_3: 0.8659,
                    metric_4: 0.5841,
                    metric_5: 0.2116,
                    metric_6: 0.344,
                    metric_7: 0.3455,
                    metric_8: 0.9677
                },
                method6: {
                    metric_1: 26.4482,
                    metric_2: 0.2709,
                    metric_3: 0.8685,
                    metric_4: 0.6149,
                    metric_5: 0.227,
                    metric_6: 0.1004,
                    metric_7: 0.4009,
                    metric_8: 0.9638
                },
                method7: {
                    metric_1: 22.0915,
                    metric_2: 0.1693,
                    metric_3: 0.868,
                    metric_4: 0.4907,
                    metric_5: 0.2331,
                    metric_6: 0.0947,
                    metric_7: 0.3127,
                    metric_8: 0.9339
                },
                method8: {
                    metric_1: 23.6919,
                    metric_2: 0.2173,
                    metric_3: 0.8826,
                    metric_4: 0.5593,
                    metric_5: 0.4631,
                    metric_6: 0.2647,
                    metric_7: 0.5605,
                    metric_8: 0.9551
                }
            }
        },
        stylization: {
            editPrompt: "Make it in an Afrofuturism style",
            targetPrompt: "A orange cat getting up from floor and walking on its hind legs, depicted in an Afrofuturism style",
            resultVideos: {
                method1: "VEditBench-Short/animal_0022/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0022/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0022/stylization/flatten.mp4",
                method4: "VEditBench-Short/animal_0022/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0022/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0022/stylization/pix2video.mp4",
                method7: "VEditBench-Short/animal_0022/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0022/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.9702,
                    metric_2: 0.1875,
                    metric_3: 0.8521,
                    metric_4: 0.5034,
                    metric_5: 0.6766,
                    metric_6: 0.3943,
                    metric_7: 0.7402,
                    metric_8: 0.9611
                },
                method2: {
                    metric_1: 22.7336,
                    metric_2: 0.2045,
                    metric_3: 0.8717,
                    metric_4: 0.7224,
                    metric_5: 0.2692,
                    metric_6: 0.1867,
                    metric_7: 0.3162,
                    metric_8: 0.978
                },
                method3: {
                    metric_1: 21.2363,
                    metric_2: 0.2444,
                    metric_3: 0.8418,
                    metric_4: 0.3865,
                    metric_5: 0.4287,
                    metric_6: 0.3505,
                    metric_7: 0.5151,
                    metric_8: 0.9375
                },
                method4: {
                    metric_1: 25.4205,
                    metric_2: 0.2263,
                    metric_3: 0.8847,
                    metric_4: 0.7971,
                    metric_5: 0.2649,
                    metric_6: 0.0855,
                    metric_7: 0.3408,
                    metric_8: 0.9709
                },
                method5: {
                    metric_1: 27.024,
                    metric_2: 0.2228,
                    metric_3: 0.8808,
                    metric_4: 0.7036,
                    metric_5: 0.236,
                    metric_6: 0.0704,
                    metric_7: 0.2917,
                    metric_8: 0.971
                },
                method6: {
                    metric_1: 24.5294,
                    metric_2: 0.2674,
                    metric_3: 0.8474,
                    metric_4: 0.5975,
                    metric_5: 0.4342,
                    metric_6: 0.2674,
                    metric_7: 0.5464,
                    metric_8: 0.9676
                },
                method7: {
                    metric_1: 27.7343,
                    metric_2: 0.2214,
                    metric_3: 0.8608,
                    metric_4: 0.4658,
                    metric_5: 0.2087,
                    metric_6: 0.0832,
                    metric_7: 0.291,
                    metric_8: 0.9336
                },
                method8: {
                    metric_1: 27.1139,
                    metric_2: 0.2272,
                    metric_3: 0.869,
                    metric_4: 0.5609,
                    metric_5: 0.4486,
                    metric_6: 0.2587,
                    metric_7: 0.543,
                    metric_8: 0.951
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/animal_0029/input.mp4",
    category: "Animal",
    originalCaption: "Swans gliding over a lake.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the swans diving under the water.",
            targetPrompt: "Swans diving under the water of a lake.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0029/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0029/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0029/motion_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0029/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0029/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0029/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0029/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0029/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.9789,
                    metric_2: 0.2267,
                    metric_3: 0.8605,
                    metric_4: 0.2113,
                    metric_5: 0.8014,
                    metric_6: 0.4262,
                    metric_7: 0.8018,
                    metric_8: 0.9691
                },
                method2: {
                    metric_1: 25.9461,
                    metric_2: 0.2206,
                    metric_3: 0.9256,
                    metric_4: 0.5626,
                    metric_5: 0.8936,
                    metric_6: 0.4553,
                    metric_7: 0.873,
                    metric_8: 0.9596
                },
                method3: {
                    metric_1: 30.1176,
                    metric_2: 0.2464,
                    metric_3: 0.902,
                    metric_4: 0.459,
                    metric_5: 0.6903,
                    metric_6: 0.5991,
                    metric_7: 0.8237,
                    metric_8: 0.9528
                },
                method4: {
                    metric_1: 24.9268,
                    metric_2: 0.2118,
                    metric_3: 0.8917,
                    metric_4: 0.5715,
                    metric_5: 0.9087,
                    metric_6: 0.464,
                    metric_7: 0.8921,
                    metric_8: 0.9492
                },
                method5: {
                    metric_1: 24.7764,
                    metric_2: 0.225,
                    metric_3: 0.9126,
                    metric_4: 0.6762,
                    metric_5: 0.854,
                    metric_6: 0.4796,
                    metric_7: 0.9004,
                    metric_8: 0.9533
                },
                method6: {
                    metric_1: 25.7175,
                    metric_2: 0.2408,
                    metric_3: 0.8871,
                    metric_4: 0.4395,
                    metric_5: 0.8183,
                    metric_6: 0.5192,
                    metric_7: 0.8032,
                    metric_8: 0.9681
                },
                method7: {
                    metric_1: 25.5355,
                    metric_2: 0.2127,
                    metric_3: 0.8977,
                    metric_4: 0.4165,
                    metric_5: 0.5461,
                    metric_6: 0.3098,
                    metric_7: 0.5806,
                    metric_8: 0.9392
                },
                method8: {
                    metric_1: 26.2141,
                    metric_2: 0.2304,
                    metric_3: 0.8504,
                    metric_4: 0.3338,
                    metric_5: 0.7038,
                    metric_6: 0.4302,
                    metric_7: 0.7075,
                    metric_8: 0.9646
                }
            }
        },
        'object-change': {
            editPrompt: "Change the swans to ducks.",
            targetPrompt: "Ducks gliding over a lake.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0029/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0029/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0029/object_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0029/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0029/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0029/object_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0029/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0029/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.7162,
                    metric_2: 0.1942,
                    metric_3: 0.7189,
                    metric_4: 0.2147,
                    metric_5: 0.8251,
                    metric_6: 0.3432,
                    metric_7: 0.8584,
                    metric_8: 0.9731
                },
                method2: {
                    metric_1: 19.5006,
                    metric_2: 0.1769,
                    metric_3: 0.8779,
                    metric_4: 0.5871,
                    metric_5: 0.9276,
                    metric_6: 0.4429,
                    metric_7: 0.8975,
                    metric_8: 0.954
                },
                method3: {
                    metric_1: 16.0371,
                    metric_2: 0.0869,
                    metric_3: 0.8386,
                    metric_4: 0.3894,
                    metric_5: 0.0358,
                    metric_6: 0.3468,
                    metric_7: 0.2786,
                    metric_8: 0.9154
                },
                method4: {
                    metric_1: 19.6053,
                    metric_2: 0.1783,
                    metric_3: 0.913,
                    metric_4: 0.5866,
                    metric_5: 0.9647,
                    metric_6: 0.4862,
                    metric_7: 0.9194,
                    metric_8: 0.9462
                },
                method5: {
                    metric_1: 22.8469,
                    metric_2: 0.1975,
                    metric_3: 0.8688,
                    metric_4: 0.5131,
                    metric_5: 0.7603,
                    metric_6: 0.5164,
                    metric_7: 0.8105,
                    metric_8: 0.9502
                },
                method6: {
                    metric_1: 22.3431,
                    metric_2: 0.199,
                    metric_3: 0.879,
                    metric_4: 0.3973,
                    metric_5: 0.7458,
                    metric_6: 0.5054,
                    metric_7: 0.792,
                    metric_8: 0.9625
                },
                method7: {
                    metric_1: 24.9644,
                    metric_2: 0.2012,
                    metric_3: 0.8402,
                    metric_4: 0.4002,
                    metric_5: 0.4471,
                    metric_6: 0.3228,
                    metric_7: 0.4763,
                    metric_8: 0.9451
                },
                method8: {
                    metric_1: 24.9511,
                    metric_2: 0.2227,
                    metric_3: 0.6482,
                    metric_4: 0.3163,
                    metric_5: 0.6064,
                    metric_6: 0.2389,
                    metric_7: 0.6558,
                    metric_8: 0.9696
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a small sailboat in the background.",
            targetPrompt: "Swans gliding over a lake with a small sailboat in the background.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0029/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0029/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0029/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/animal_0029/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0029/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0029/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/animal_0029/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0029/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.8519,
                    metric_2: 0.2356,
                    metric_3: 0.7599,
                    metric_4: 0.2391,
                    metric_5: 0.8235,
                    metric_6: 0.4557,
                    metric_7: 0.8389,
                    metric_8: 0.9814
                },
                method2: {
                    metric_1: 24.8283,
                    metric_2: 0.2298,
                    metric_3: 0.915,
                    metric_4: 0.5157,
                    metric_5: 0.8645,
                    metric_6: 0.4715,
                    metric_7: 0.8701,
                    metric_8: 0.9665
                },
                method3: {
                    metric_1: 23.4509,
                    metric_2: 0.2159,
                    metric_3: 0.9036,
                    metric_4: 0.6894,
                    metric_5: 0.9071,
                    metric_6: 0.4853,
                    metric_7: 0.9004,
                    metric_8: 0.9633
                },
                method4: {
                    metric_1: 24.2617,
                    metric_2: 0.2226,
                    metric_3: 0.9108,
                    metric_4: 0.561,
                    metric_5: 0.8824,
                    metric_6: 0.4643,
                    metric_7: 0.8853,
                    metric_8: 0.9557
                },
                method5: {
                    metric_1: 23.9351,
                    metric_2: 0.2224,
                    metric_3: 0.8811,
                    metric_4: 0.6381,
                    metric_5: 0.8122,
                    metric_6: 0.4562,
                    metric_7: 0.8345,
                    metric_8: 0.9533
                },
                method6: {
                    metric_1: 24.721,
                    metric_2: 0.2463,
                    metric_3: 0.8981,
                    metric_4: 0.425,
                    metric_5: 0.687,
                    metric_6: 0.4993,
                    metric_7: 0.7183,
                    metric_8: 0.9716
                },
                method7: {
                    metric_1: 25.7482,
                    metric_2: 0.2268,
                    metric_3: 0.8462,
                    metric_4: 0.3833,
                    metric_5: 0.5084,
                    metric_6: 0.2893,
                    metric_7: 0.5181,
                    metric_8: 0.9376
                },
                method8: {
                    metric_1: 25.0589,
                    metric_2: 0.2414,
                    metric_3: 0.8181,
                    metric_4: 0.3496,
                    metric_5: 0.6862,
                    metric_6: 0.4151,
                    metric_7: 0.7104,
                    metric_8: 0.9649
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove one of the swans.",
            targetPrompt: "A swan gliding over a lake.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0029/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0029/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0029/object_removal/flatten.mp4",
                method4: "VEditBench-Short/animal_0029/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0029/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0029/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/animal_0029/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0029/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.7109,
                    metric_2: 0.1936,
                    metric_3: 0.769,
                    metric_4: 0.2264,
                    metric_5: 0.7725,
                    metric_6: 0.4067,
                    metric_7: 0.7939,
                    metric_8: 0.9772
                },
                method2: {
                    metric_1: 22.5135,
                    metric_2: 0.1928,
                    metric_3: 0.9041,
                    metric_4: 0.5269,
                    metric_5: 0.832,
                    metric_6: 0.4433,
                    metric_7: 0.8525,
                    metric_8: 0.9698
                },
                method3: {
                    metric_1: 21.051,
                    metric_2: 0.1902,
                    metric_3: 0.8988,
                    metric_4: 0.598,
                    metric_5: 0.7609,
                    metric_6: 0.4805,
                    metric_7: 0.8652,
                    metric_8: 0.9739
                },
                method4: {
                    metric_1: 21.2988,
                    metric_2: 0.1881,
                    metric_3: 0.8991,
                    metric_4: 0.5729,
                    metric_5: 0.8781,
                    metric_6: 0.4546,
                    metric_7: 0.8716,
                    metric_8: 0.9569
                },
                method5: {
                    metric_1: 17.0355,
                    metric_2: 0.1077,
                    metric_3: 0.8589,
                    metric_4: 0.4592,
                    metric_5: 0.357,
                    metric_6: 0.2021,
                    metric_7: 0.498,
                    metric_8: 0.9723
                },
                method6: {
                    metric_1: 21.7545,
                    metric_2: 0.2086,
                    metric_3: 0.9049,
                    metric_4: 0.4347,
                    metric_5: 0.7529,
                    metric_6: 0.5136,
                    metric_7: 0.7676,
                    metric_8: 0.9713
                },
                method7: {
                    metric_1: 23.4108,
                    metric_2: 0.2019,
                    metric_3: 0.7878,
                    metric_4: 0.4084,
                    metric_5: 0.6789,
                    metric_6: 0.428,
                    metric_7: 0.6992,
                    metric_8: 0.9575
                },
                method8: {
                    metric_1: 23.3993,
                    metric_2: 0.2023,
                    metric_3: 0.8187,
                    metric_4: 0.3436,
                    metric_5: 0.7354,
                    metric_6: 0.4434,
                    metric_7: 0.748,
                    metric_8: 0.9772
                }
            }
        },
        'scene-change': {
            editPrompt: "Move swans gliding underwater near a coral reef.",
            targetPrompt: "Swans gliding underwater near a coral reef.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0029/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0029/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0029/scene_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0029/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0029/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0029/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0029/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0029/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.1683,
                    metric_2: 0.2331,
                    metric_3: 0.7856,
                    metric_4: 0.2124,
                    metric_5: 0.7727,
                    metric_6: 0.4029,
                    metric_7: 0.7969,
                    metric_8: 0.9742
                },
                method2: {
                    metric_1: 31.2476,
                    metric_2: 0.2724,
                    metric_3: 0.9197,
                    metric_4: 0.4493,
                    metric_5: 0.7752,
                    metric_6: 0.4645,
                    metric_7: 0.8223,
                    metric_8: 0.9596
                },
                method3: {
                    metric_1: 30.7781,
                    metric_2: 0.2571,
                    metric_3: 0.8614,
                    metric_4: 0.3709,
                    metric_5: 0.623,
                    metric_6: 0.3257,
                    metric_7: 0.7612,
                    metric_8: 0.9374
                },
                method4: {
                    metric_1: 27.0946,
                    metric_2: 0.2198,
                    metric_3: 0.8922,
                    metric_4: 0.5143,
                    metric_5: 0.9013,
                    metric_6: 0.4601,
                    metric_7: 0.8809,
                    metric_8: 0.9559
                },
                method5: {
                    metric_1: 25.7385,
                    metric_2: 0.2577,
                    metric_3: 0.8924,
                    metric_4: 0.5162,
                    metric_5: 0.8244,
                    metric_6: 0.5356,
                    metric_7: 0.8726,
                    metric_8: 0.9677
                },
                method6: {
                    metric_1: 27.5056,
                    metric_2: 0.2656,
                    metric_3: 0.9008,
                    metric_4: 0.4122,
                    metric_5: 0.9174,
                    metric_6: 0.6202,
                    metric_7: 0.8804,
                    metric_8: 0.9621
                },
                method7: {
                    metric_1: 24.5075,
                    metric_2: 0.196,
                    metric_3: 0.8549,
                    metric_4: 0.3208,
                    metric_5: 0.5888,
                    metric_6: 0.4065,
                    metric_7: 0.6221,
                    metric_8: 0.9416
                },
                method8: {
                    metric_1: 30.1677,
                    metric_2: 0.3002,
                    metric_3: 0.6766,
                    metric_4: 0.3243,
                    metric_5: 0.6057,
                    metric_6: 0.4855,
                    metric_7: 0.6831,
                    metric_8: 0.9576
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Pixel Art style",
            targetPrompt: "Swans gliding over a lake, depicted in a Pixel Art style",
            resultVideos: {
                method1: "VEditBench-Short/animal_0029/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0029/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0029/stylization/flatten.mp4",
                method4: "VEditBench-Short/animal_0029/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0029/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0029/stylization/pix2video.mp4",
                method7: "VEditBench-Short/animal_0029/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0029/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.1965,
                    metric_2: 0.2024,
                    metric_3: 0.7995,
                    metric_4: 0.2092,
                    metric_5: 0.8205,
                    metric_6: 0.5107,
                    metric_7: 0.8037,
                    metric_8: 0.9673
                },
                method2: {
                    metric_1: 32.3959,
                    metric_2: 0.2593,
                    metric_3: 0.9204,
                    metric_4: 0.466,
                    metric_5: 0.4331,
                    metric_6: 0.4409,
                    metric_7: 0.4358,
                    metric_8: 0.9706
                },
                method3: {
                    metric_1: 14.7199,
                    metric_2: 0.0537,
                    metric_3: 0.663,
                    metric_4: 0.2386,
                    metric_5: 0.0572,
                    metric_6: 0.1319,
                    metric_7: 0.1385,
                    metric_8: 0.8427
                },
                method4: {
                    metric_1: 25.6854,
                    metric_2: 0.1923,
                    metric_3: 0.9049,
                    metric_4: 0.4804,
                    metric_5: 0.54,
                    metric_6: 0.3636,
                    metric_7: 0.6069,
                    metric_8: 0.9462
                },
                method5: {
                    metric_1: 34.8845,
                    metric_2: 0.3182,
                    metric_3: 0.8632,
                    metric_4: 0.2475,
                    metric_5: 0.2275,
                    metric_6: 0.2887,
                    metric_7: 0.2729,
                    metric_8: 0.8978
                },
                method6: {
                    metric_1: 31.5339,
                    metric_2: 0.3206,
                    metric_3: 0.8663,
                    metric_4: 0.2709,
                    metric_5: 0.2991,
                    metric_6: 0.2888,
                    metric_7: 0.2598,
                    metric_8: 0.9602
                },
                method7: {
                    metric_1: 24.4626,
                    metric_2: 0.1925,
                    metric_3: 0.8388,
                    metric_4: 0.3532,
                    metric_5: 0.5902,
                    metric_6: 0.4155,
                    metric_7: 0.6045,
                    metric_8: 0.9445
                },
                method8: {
                    metric_1: 31.3384,
                    metric_2: 0.261,
                    metric_3: 0.845,
                    metric_4: 0.2687,
                    metric_5: 0.4141,
                    metric_6: 0.4161,
                    metric_7: 0.4634,
                    metric_8: 0.9477
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/animal_0038/input.mp4",
    category: "Animal",
    originalCaption: "A group of penguins are waddling in the water and jumping out of it",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the penguins swimming underwater.",
            targetPrompt: "A group of penguins are swimming underwater and jumping out of it.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0038/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0038/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0038/motion_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0038/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0038/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0038/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0038/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0038/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.661,
                    metric_2: 0.2466,
                    metric_3: 0.8723,
                    metric_4: 0.4771,
                    metric_5: 0.7702,
                    metric_6: 0.5991,
                    metric_7: 0.8159,
                    metric_8: 0.963
                },
                method2: {
                    metric_1: 31.1305,
                    metric_2: 0.259,
                    metric_3: 0.9568,
                    metric_4: 0.7473,
                    metric_5: 0.6951,
                    metric_6: 0.5465,
                    metric_7: 0.7861,
                    metric_8: 0.9805
                },
                method3: {
                    metric_1: 29.4766,
                    metric_2: 0.2596,
                    metric_3: 0.9397,
                    metric_4: 0.6706,
                    metric_5: 0.4652,
                    metric_6: 0.4641,
                    metric_7: 0.6797,
                    metric_8: 0.9839
                },
                method4: {
                    metric_1: 29.8322,
                    metric_2: 0.2462,
                    metric_3: 0.9475,
                    metric_4: 0.6859,
                    metric_5: 0.8138,
                    metric_6: 0.4709,
                    metric_7: 0.834,
                    metric_8: 0.9645
                },
                method5: {
                    metric_1: 28.4476,
                    metric_2: 0.2365,
                    metric_3: 0.9608,
                    metric_4: 0.8529,
                    metric_5: 0.6181,
                    metric_6: 0.4186,
                    metric_7: 0.7334,
                    metric_8: 0.9825
                },
                method6: {
                    metric_1: 29.908,
                    metric_2: 0.2404,
                    metric_3: 0.928,
                    metric_4: 0.7265,
                    metric_5: 0.7934,
                    metric_6: 0.5701,
                    metric_7: 0.7837,
                    metric_8: 0.9797
                },
                method7: {
                    metric_1: 29.7559,
                    metric_2: 0.2451,
                    metric_3: 0.9201,
                    metric_4: 0.5661,
                    metric_5: 0.5712,
                    metric_6: 0.4274,
                    metric_7: 0.6479,
                    metric_8: 0.9452
                },
                method8: {
                    metric_1: 27.9651,
                    metric_2: 0.2146,
                    metric_3: 0.9318,
                    metric_4: 0.5976,
                    metric_5: 0.6517,
                    metric_6: 0.684,
                    metric_7: 0.7891,
                    metric_8: 0.9816
                }
            }
        },
        'object-change': {
            editPrompt: "Change the penguins to dolphins.",
            targetPrompt: "A group of dolphins are swimming in the water and jumping out of it.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0038/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0038/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0038/object_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0038/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0038/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0038/object_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0038/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0038/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.2863,
                    metric_2: 0.2252,
                    metric_3: 0.9354,
                    metric_4: 0.4057,
                    metric_5: 0.6917,
                    metric_6: 0.3652,
                    metric_7: 0.7573,
                    metric_8: 0.9804
                },
                method2: {
                    metric_1: 25.1732,
                    metric_2: 0.2613,
                    metric_3: 0.9549,
                    metric_4: 0.7252,
                    metric_5: 0.6323,
                    metric_6: 0.3004,
                    metric_7: 0.6924,
                    metric_8: 0.9805
                },
                method3: {
                    metric_1: 25.3331,
                    metric_2: 0.2515,
                    metric_3: 0.9340,
                    metric_4: 0.782,
                    metric_5: 0.5428,
                    metric_6: 0.3585,
                    metric_7: 0.6279,
                    metric_8: 0.9703
                },
                method4: {
                    metric_1: 25.5661,
                    metric_2: 0.2463,
                    metric_3: 0.9458,
                    metric_4: 0.5407,
                    metric_5: 0.6831,
                    metric_6: 0.3095,
                    metric_7: 0.731,
                    metric_8: 0.9503
                },
                method5: {
                    metric_1: 24.96,
                    metric_2: 0.2135,
                    metric_3: 0.9614,
                    metric_4: 0.8730,
                    metric_5: 0.5991,
                    metric_6: 0.4079,
                    metric_7: 0.7192,
                    metric_8: 0.9792
                },
                method6: {
                    metric_1: 25.5783,
                    metric_2: 0.2437,
                    metric_3: 0.9435,
                    metric_4: 0.6216,
                    metric_5: 0.6775,
                    metric_6: 0.3448,
                    metric_7: 0.7231,
                    metric_8: 0.9527
                },
                method7: {
                    metric_1: 26.4627,
                    metric_2: 0.2592,
                    metric_3: 0.8481,
                    metric_4: 0.6362,
                    metric_5: 0.5737,
                    metric_6: 0.4422,
                    metric_7: 0.709,
                    metric_8: 0.9395
                },
                method8: {
                    metric_1: 24.5608,
                    metric_2: 0.1981,
                    metric_3: 0.4978,
                    metric_4: 0.6024,
                    metric_5: 0.4799,
                    metric_6: 0.2009,
                    metric_7: 0.5527,
                    metric_8: 0.9822
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add an iceberg in the background.",
            targetPrompt: "A group of penguins are waddling in the water and jumping out of it, with an iceberg in the background.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0038/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0038/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0038/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/animal_0038/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0038/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0038/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/animal_0038/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0038/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.7089,
                    metric_2: 0.2858,
                    metric_3: 0.9211,
                    metric_4: 0.5069,
                    metric_5: 0.7831,
                    metric_6: 0.5776,
                    metric_7: 0.8647,
                    metric_8: 0.9834
                },
                method2: {
                    metric_1: 28.1958,
                    metric_2: 0.2848,
                    metric_3: 0.9505,
                    metric_4: 0.7895,
                    metric_5: 0.7696,
                    metric_6: 0.5839,
                    metric_7: 0.8442,
                    metric_8: 0.9802
                },
                method3: {
                    metric_1: 28.261,
                    metric_2: 0.2747,
                    metric_3: 0.9518,
                    metric_4: 0.7401,
                    metric_5: 0.7265,
                    metric_6: 0.611,
                    metric_7: 0.7847,
                    metric_8: 0.9796
                },
                method4: {
                    metric_1: 27.0225,
                    metric_2: 0.241,
                    metric_3: 0.9495,
                    metric_4: 0.7445,
                    metric_5: 0.6962,
                    metric_6: 0.4378,
                    metric_7: 0.7671,
                    metric_8: 0.9659
                },
                method5: {
                    metric_1: 28.4405,
                    metric_2: 0.2768,
                    metric_3: 0.9603,
                    metric_4: 0.8517,
                    metric_5: 0.5718,
                    metric_6: 0.4283,
                    metric_7: 0.7026,
                    metric_8: 0.9853
                },
                method6: {
                    metric_1: 26.8059,
                    metric_2: 0.2581,
                    metric_3: 0.8771,
                    metric_4: 0.6543,
                    metric_5: 0.8203,
                    metric_6: 0.6058,
                    metric_7: 0.8511,
                    metric_8: 0.9737
                },
                method7: {
                    metric_1: 29.2889,
                    metric_2: 0.2429,
                    metric_3: 0.8611,
                    metric_4: 0.4777,
                    metric_5: 0.5396,
                    metric_6: 0.4086,
                    metric_7: 0.561,
                    metric_8: 0.9325
                },
                method8: {
                    metric_1: 26.6235,
                    metric_2: 0.2826,
                    metric_3: 0.9358,
                    metric_4: 0.546,
                    metric_5: 0.7054,
                    metric_6: 0.5981,
                    metric_7: 0.8418,
                    metric_8: 0.976
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the water.",
            targetPrompt: "A group of penguins are waddling and jumping on the ground.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0038/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0038/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0038/object_removal/flatten.mp4",
                method4: "VEditBench-Short/animal_0038/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0038/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0038/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/animal_0038/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0038/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.5616,
                    metric_2: 0.239,
                    metric_3: 0.9343,
                    metric_4: 0.4718,
                    metric_5: 0.8851,
                    metric_6: 0.6865,
                    metric_7: 0.9102,
                    metric_8: 0.9763
                },
                method2: {
                    metric_1: 29.3122,
                    metric_2: 0.2326,
                    metric_3: 0.9515,
                    metric_4: 0.8008,
                    metric_5: 0.606,
                    metric_6: 0.4895,
                    metric_7: 0.7549,
                    metric_8: 0.9811
                },
                method3: {
                    metric_1: 23.8233,
                    metric_2: 0.1852,
                    metric_3: 0.9506,
                    metric_4: 0.7452,
                    metric_5: 0.0951,
                    metric_6: 0.1091,
                    metric_7: 0.1747,
                    metric_8: 0.9549
                },
                method4: {
                    metric_1: 28.6402,
                    metric_2: 0.2212,
                    metric_3: 0.9587,
                    metric_4: 0.7291,
                    metric_5: 0.5969,
                    metric_6: 0.3345,
                    metric_7: 0.6934,
                    metric_8: 0.9605
                },
                method5: {
                    metric_1: 26.3057,
                    metric_2: 0.2049,
                    metric_3: 0.9564,
                    metric_4: 0.7569,
                    metric_5: 0.3512,
                    metric_6: 0.1918,
                    metric_7: 0.4863,
                    metric_8: 0.9817
                },
                method6: {
                    metric_1: 26.9915,
                    metric_2: 0.2268,
                    metric_3: 0.9467,
                    metric_4: 0.7685,
                    metric_5: 0.4038,
                    metric_6: 0.3779,
                    metric_7: 0.5825,
                    metric_8: 0.9727
                },
                method7: {
                    metric_1: 28.5437,
                    metric_2: 0.2196,
                    metric_3: 0.8755,
                    metric_4: 0.4885,
                    metric_5: 0.4691,
                    metric_6: 0.3422,
                    metric_7: 0.478,
                    metric_8: 0.9314
                },
                method8: {
                    metric_1: 28.3134,
                    metric_2: 0.2529,
                    metric_3: 0.9442,
                    metric_4: 0.54,
                    metric_5: 0.5915,
                    metric_6: 0.5151,
                    metric_7: 0.7539,
                    metric_8: 0.9726
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a snowy setting.",
            targetPrompt: "A group of penguins are waddling in the water and jumping out of it in a snowy setting.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0038/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0038/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0038/scene_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0038/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0038/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0038/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0038/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0038/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.1623,
                    metric_2: 0.2816,
                    metric_3: 0.9186,
                    metric_4: 0.5098,
                    metric_5: 0.8262,
                    metric_6: 0.6607,
                    metric_7: 0.8945,
                    metric_8: 0.9839
                },
                method2: {
                    metric_1: 31.1405,
                    metric_2: 0.284,
                    metric_3: 0.9561,
                    metric_4: 0.7962,
                    metric_5: 0.6896,
                    metric_6: 0.5374,
                    metric_7: 0.7754,
                    metric_8: 0.9817
                },
                method3: {
                    metric_1: 29.4326,
                    metric_2: 0.2615,
                    metric_3: 0.9429,
                    metric_4: 0.7849,
                    metric_5: 0.4933,
                    metric_6: 0.394,
                    metric_7: 0.6616,
                    metric_8: 0.9813
                },
                method4: {
                    metric_1: 29.2991,
                    metric_2: 0.237,
                    metric_3: 0.9452,
                    metric_4: 0.7667,
                    metric_5: 0.6561,
                    metric_6: 0.3959,
                    metric_7: 0.7275,
                    metric_8: 0.9656
                },
                method5: {
                    metric_1: 30.2838,
                    metric_2: 0.2633,
                    metric_3: 0.9633,
                    metric_4: 0.8448,
                    metric_5: 0.5352,
                    metric_6: 0.3551,
                    metric_7: 0.6968,
                    metric_8: 0.9832
                },
                method6: {
                    metric_1: 28.9046,
                    metric_2: 0.2496,
                    metric_3: 0.9206,
                    metric_4: 0.6953,
                    metric_5: 0.7343,
                    metric_6: 0.5035,
                    metric_7: 0.7974,
                    metric_8: 0.9618
                },
                method7: {
                    metric_1: 28.8493,
                    metric_2: 0.2546,
                    metric_3: 0.8794,
                    metric_4: 0.5017,
                    metric_5: 0.4672,
                    metric_6: 0.3369,
                    metric_7: 0.4805,
                    metric_8: 0.9376
                },
                method8: {
                    metric_1: 28.816,
                    metric_2: 0.2615,
                    metric_3: 0.939,
                    metric_4: 0.5192,
                    metric_5: 0.651,
                    metric_6: 0.4951,
                    metric_7: 0.752,
                    metric_8: 0.9754
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Ukiyo style",
            targetPrompt: "A group of penguins are waddling in the water and jumping out of it, depicted in a Ukiyo style",
            resultVideos: {
                method1: "VEditBench-Short/animal_0038/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0038/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0038/stylization/flatten.mp4",
                method4: "VEditBench-Short/animal_0038/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0038/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0038/stylization/pix2video.mp4",
                method7: "VEditBench-Short/animal_0038/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0038/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.1556,
                    metric_2: 0.2229,
                    metric_3: 0.9369,
                    metric_4: 0.4636,
                    metric_5: 0.8732,
                    metric_6: 0.6945,
                    metric_7: 0.8931,
                    metric_8: 0.9819
                },
                method2: {
                    metric_1: 26.8419,
                    metric_2: 0.1719,
                    metric_3: 0.949,
                    metric_4: 0.7161,
                    metric_5: 0.4102,
                    metric_6: 0.5036,
                    metric_7: 0.5571,
                    metric_8: 0.9825
                },
                method3: {
                    metric_1: 17.3127,
                    metric_2: 0.0804,
                    metric_3: 0.9208,
                    metric_4: 0.6216,
                    metric_5: 0.3047,
                    metric_6: 0.2656,
                    metric_7: 0.3853,
                    metric_8: 0.9691
                },
                method4: {
                    metric_1: 26.2787,
                    metric_2: 0.2084,
                    metric_3: 0.949,
                    metric_4: 0.7421,
                    metric_5: 0.7382,
                    metric_6: 0.5192,
                    metric_7: 0.8223,
                    metric_8: 0.9652
                },
                method5: {
                    metric_1: 24.4023,
                    metric_2: 0.2002,
                    metric_3: 0.9595,
                    metric_4: 0.8788,
                    metric_5: 0.5245,
                    metric_6: 0.3198,
                    metric_7: 0.6533,
                    metric_8: 0.9791
                },
                method6: {
                    metric_1: 25.1566,
                    metric_2: 0.211,
                    metric_3: 0.9311,
                    metric_4: 0.7493,
                    metric_5: 0.6694,
                    metric_6: 0.5224,
                    metric_7: 0.7139,
                    metric_8: 0.9785
                },
                method7: {
                    metric_1: 27.871,
                    metric_2: 0.2194,
                    metric_3: 0.8628,
                    metric_4: 0.5351,
                    metric_5: 0.558,
                    metric_6: 0.4434,
                    metric_7: 0.6177,
                    metric_8: 0.9427
                },
                method8: {
                    metric_1: 25.4419,
                    metric_2: 0.2102,
                    metric_3: 0.9384,
                    metric_4: 0.5603,
                    metric_5: 0.6087,
                    metric_6: 0.6293,
                    metric_7: 0.7842,
                    metric_8: 0.9731
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/animal_0046/input.mp4",
    category: "Animal",
    originalCaption: "A herd of cattle is grazing in a green pasture with a large tree and some grass.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the cattle lying down.",
            targetPrompt: "A herd of cattle is lying down in a green pasture with a large tree and some grass.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0046/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0046/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0046/motion_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0046/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0046/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0046/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0046/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0046/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.758,
                    metric_2: 0.22,
                    metric_3: 0.9564,
                    metric_4: 0.4024,
                    metric_5: 0.7462,
                    metric_6: 0.3626,
                    metric_7: 0.7627,
                    metric_8: 0.982
                },
                method2: {
                    metric_1: 25.9733,
                    metric_2: 0.1937,
                    metric_3: 0.9891,
                    metric_4: 0.5731,
                    metric_5: 0.9608,
                    metric_6: 0.5145,
                    metric_7: 0.8979,
                    metric_8: 0.9758
                },
                method3: {
                    metric_1: 24.221,
                    metric_2: 0.1834,
                    metric_3: 0.9893,
                    metric_4: 0.7903,
                    metric_5: 0.613,
                    metric_6: 0.3068,
                    metric_7: 0.6729,
                    metric_8: 0.9835
                },
                method4: {
                    metric_1: 24.5362,
                    metric_2: 0.1945,
                    metric_3: 0.9901,
                    metric_4: 0.5819,
                    metric_5: 0.8285,
                    metric_6: 0.5028,
                    metric_7: 0.8247,
                    metric_8: 0.9766
                },
                method5: {
                    metric_1: 24.8716,
                    metric_2: 0.1645,
                    metric_3: 0.9904,
                    metric_4: 0.7596,
                    metric_5: 0.7113,
                    metric_6: 0.3574,
                    metric_7: 0.7627,
                    metric_8: 0.9813
                },
                method6: {
                    metric_1: 24.9455,
                    metric_2: 0.2095,
                    metric_3: 0.9835,
                    metric_4: 0.6363,
                    metric_5: 0.6151,
                    metric_6: 0.4102,
                    metric_7: 0.6597,
                    metric_8: 0.9812
                },
                method7: {
                    metric_1: 26.5571,
                    metric_2: 0.1914,
                    metric_3: 0.9796,
                    metric_4: 0.439,
                    metric_5: 0.4105,
                    metric_6: 0.2108,
                    metric_7: 0.4312,
                    metric_8: 0.9565
                },
                method8: {
                    metric_1: 25.7396,
                    metric_2: 0.2443,
                    metric_3: 0.9839,
                    metric_4: 0.4461,
                    metric_5: 0.4868,
                    metric_6: 0.2071,
                    metric_7: 0.5381,
                    metric_8: 0.9727
                }
            }
        },
        'object-change': {
            editPrompt: "Change the cattle to a flock of sheep.",
            targetPrompt: "A flock of sheep is grazing in a green pasture with a large tree and some grass.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0046/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0046/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0046/object_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0046/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0046/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0046/object_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0046/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0046/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.5545,
                    metric_2: 0.2599,
                    metric_3: 0.9534,
                    metric_4: 0.366,
                    metric_5: 0.8449,
                    metric_6: 0.45,
                    metric_7: 0.8555,
                    metric_8: 0.9757
                },
                method2: {
                    metric_1: 28.3414,
                    metric_2: 0.2553,
                    metric_3: 0.9885,
                    metric_4: 0.4528,
                    metric_5: 0.8559,
                    metric_6: 0.5347,
                    metric_7: 0.8433,
                    metric_8: 0.9767
                },
                method3: {
                    metric_1: 25.6838,
                    metric_2: 0.2575,
                    metric_3: 0.9751,
                    metric_4: 0.5884,
                    metric_5: 0.4504,
                    metric_6: 0.3346,
                    metric_7: 0.4939,
                    metric_8: 0.9728
                },
                method4: {
                    metric_1: 27.7125,
                    metric_2: 0.2538,
                    metric_3: 0.9893,
                    metric_4: 0.4735,
                    metric_5: 0.7867,
                    metric_6: 0.4829,
                    metric_7: 0.7988,
                    metric_8: 0.9763
                },
                method5: {
                    metric_1: 26.4941,
                    metric_2: 0.1934,
                    metric_3: 0.9644,
                    metric_4: 0.5943,
                    metric_5: 0.687,
                    metric_6: 0.4758,
                    metric_7: 0.7686,
                    metric_8: 0.9786
                },
                method6: {
                    metric_1: 28.1916,
                    metric_2: 0.2604,
                    metric_3: 0.9794,
                    metric_4: 0.5456,
                    metric_5: 0.5627,
                    metric_6: 0.4202,
                    metric_7: 0.6099,
                    metric_8: 0.9807
                },
                method7: {
                    metric_1: 27.1242,
                    metric_2: 0.2525,
                    metric_3: 0.9779,
                    metric_4: 0.4307,
                    metric_5: 0.4451,
                    metric_6: 0.2326,
                    metric_7: 0.4993,
                    metric_8: 0.954
                },
                method8: {
                    metric_1: 28.3994,
                    metric_2: 0.2777,
                    metric_3: 0.9699,
                    metric_4: 0.4099,
                    metric_5: 0.6243,
                    metric_6: 0.283,
                    metric_7: 0.6821,
                    metric_8: 0.9682
                }
            }
        },
        'object-insertion': {
            editPrompt: "Have the cattle a red barn in the background.",
            targetPrompt: "A herd of cattle is grazing in a green pasture with a large tree, some grass, and a red barn in the background.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0046/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0046/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0046/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/animal_0046/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0046/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0046/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/animal_0046/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0046/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.0692,
                    metric_2: 0.1987,
                    metric_3: 0.9368,
                    metric_4: 0.3731,
                    metric_5: 0.758,
                    metric_6: 0.3578,
                    metric_7: 0.7783,
                    metric_8: 0.979
                },
                method2: {
                    metric_1: 27.0395,
                    metric_2: 0.2087,
                    metric_3: 0.9894,
                    metric_4: 0.6102,
                    metric_5: 0.9171,
                    metric_6: 0.5235,
                    metric_7: 0.8101,
                    metric_8: 0.9785
                },
                method3: {
                    metric_1: 21.001,
                    metric_2: 0.1918,
                    metric_3: 0.9708,
                    metric_4: 0.671,
                    metric_5: 0.2199,
                    metric_6: 0.0352,
                    metric_7: 0.3247,
                    metric_8: 0.9833
                },
                method4: {
                    metric_1: 26.2244,
                    metric_2: 0.2009,
                    metric_3: 0.9899,
                    metric_4: 0.5994,
                    metric_5: 0.8034,
                    metric_6: 0.5265,
                    metric_7: 0.7842,
                    metric_8: 0.9779
                },
                method5: {
                    metric_1: 23.411,
                    metric_2: 0.1979,
                    metric_3: 0.9909,
                    metric_4: 0.66,
                    metric_5: 0.455,
                    metric_6: 0.3012,
                    metric_7: 0.5576,
                    metric_8: 0.9859
                },
                method6: {
                    metric_1: 25.7739,
                    metric_2: 0.2198,
                    metric_3: 0.9861,
                    metric_4: 0.6467,
                    metric_5: 0.4201,
                    metric_6: 0.2808,
                    metric_7: 0.4863,
                    metric_8: 0.9798
                },
                method7: {
                    metric_1: 27.207,
                    metric_2: 0.2136,
                    metric_3: 0.9777,
                    metric_4: 0.3897,
                    metric_5: 0.3964,
                    metric_6: 0.2058,
                    metric_7: 0.4392,
                    metric_8: 0.955
                },
                method8: {
                    metric_1: 25.7884,
                    metric_2: 0.2053,
                    metric_3: 0.9827,
                    metric_4: 0.4208,
                    metric_5: 0.4289,
                    metric_6: 0.1764,
                    metric_7: 0.4373,
                    metric_8: 0.9688
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the large tree.",
            targetPrompt: "A herd of cattle is grazing in a green pasture with some grass.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0046/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0046/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0046/object_removal/flatten.mp4",
                method4: "VEditBench-Short/animal_0046/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0046/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0046/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/animal_0046/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0046/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.4339,
                    metric_2: 0.2259,
                    metric_3: 0.939,
                    metric_4: 0.3871,
                    metric_5: 0.7422,
                    metric_6: 0.3641,
                    metric_7: 0.7568,
                    metric_8: 0.9793
                },
                method2: {
                    metric_1: 26.3675,
                    metric_2: 0.2264,
                    metric_3: 0.9889,
                    metric_4: 0.5968,
                    metric_5: 0.9359,
                    metric_6: 0.4969,
                    metric_7: 0.8989,
                    metric_8: 0.9755
                },
                method3: {
                    metric_1: 24.1141,
                    metric_2: 0.2296,
                    metric_3: 0.9845,
                    metric_4: 0.6923,
                    metric_5: 0.2794,
                    metric_6: 0.4176,
                    metric_7: 0.4038,
                    metric_8: 0.9796
                },
                method4: {
                    metric_1: 25.473,
                    metric_2: 0.2243,
                    metric_3: 0.9877,
                    metric_4: 0.5858,
                    metric_5: 0.742,
                    metric_6: 0.4,
                    metric_7: 0.7456,
                    metric_8: 0.9722
                },
                method5: {
                    metric_1: 26.1749,
                    metric_2: 0.203,
                    metric_3: 0.9846,
                    metric_4: 0.7771,
                    metric_5: 0.7126,
                    metric_6: 0.3556,
                    metric_7: 0.7397,
                    metric_8: 0.9808
                },
                method6: {
                    metric_1: 27.6458,
                    metric_2: 0.2245,
                    metric_3: 0.983,
                    metric_4: 0.6027,
                    metric_5: 0.604,
                    metric_6: 0.4585,
                    metric_7: 0.6348,
                    metric_8: 0.982
                },
                method7: {
                    metric_1: 27.5867,
                    metric_2: 0.2317,
                    metric_3: 0.9839,
                    metric_4: 0.477,
                    metric_5: 0.4374,
                    metric_6: 0.2233,
                    metric_7: 0.4551,
                    metric_8: 0.9617
                },
                method8: {
                    metric_1: 26.2702,
                    metric_2: 0.2528,
                    metric_3: 0.9754,
                    metric_4: 0.4533,
                    metric_5: 0.4688,
                    metric_6: 0.1909,
                    metric_7: 0.4836,
                    metric_8: 0.972
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in the mountainous area.",
            targetPrompt: "A herd of cattle is grazing in a green pasture with a large tree and some grass in a mountainous area.",
            resultVideos: {
                method1: "VEditBench-Short/animal_0046/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0046/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0046/scene_change/flatten.mp4",
                method4: "VEditBench-Short/animal_0046/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0046/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0046/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/animal_0046/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0046/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.4714,
                    metric_2: 0.1993,
                    metric_3: 0.9657,
                    metric_4: 0.3752,
                    metric_5: 0.7954,
                    metric_6: 0.4046,
                    metric_7: 0.7803,
                    metric_8: 0.9763
                },
                method2: {
                    metric_1: 25.1163,
                    metric_2: 0.2071,
                    metric_3: 0.9884,
                    metric_4: 0.5322,
                    metric_5: 0.8803,
                    metric_6: 0.5183,
                    metric_7: 0.8179,
                    metric_8: 0.9753
                },
                method3: {
                    metric_1: 22.9148,
                    metric_2: 0.2071,
                    metric_3: 0.988,
                    metric_4: 0.6475,
                    metric_5: 0.5125,
                    metric_6: 0.2709,
                    metric_7: 0.5488,
                    metric_8: 0.9795
                },
                method4: {
                    metric_1: 24.4832,
                    metric_2: 0.2186,
                    metric_3: 0.9835,
                    metric_4: 0.5061,
                    metric_5: 0.8017,
                    metric_6: 0.5021,
                    metric_7: 0.7764,
                    metric_8: 0.973
                },
                method5: {
                    metric_1: 23.8513,
                    metric_2: 0.1672,
                    metric_3: 0.9872,
                    metric_4: 0.7261,
                    metric_5: 0.7129,
                    metric_6: 0.394,
                    metric_7: 0.751,
                    metric_8: 0.9773
                },
                method6: {
                    metric_1: 24.9906,
                    metric_2: 0.2345,
                    metric_3: 0.9831,
                    metric_4: 0.5994,
                    metric_5: 0.5243,
                    metric_6: 0.3483,
                    metric_7: 0.5352,
                    metric_8: 0.9813
                },
                method7: {
                    metric_1: 26.1445,
                    metric_2: 0.2222,
                    metric_3: 0.9798,
                    metric_4: 0.4188,
                    metric_5: 0.4343,
                    metric_6: 0.1951,
                    metric_7: 0.4736,
                    metric_8: 0.9549
                },
                method8: {
                    metric_1: 27.0698,
                    metric_2: 0.2578,
                    metric_3: 0.9833,
                    metric_4: 0.4038,
                    metric_5: 0.4321,
                    metric_6: 0.1863,
                    metric_7: 0.4402,
                    metric_8: 0.9679
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Product Photography style",
            targetPrompt: "A herd of cattle is grazing in a green pasture with a large tree and some grass, depicted in a Product Photography style",
            resultVideos: {
                method1: "VEditBench-Short/animal_0046/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/animal_0046/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/animal_0046/stylization/flatten.mp4",
                method4: "VEditBench-Short/animal_0046/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/animal_0046/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/animal_0046/stylization/pix2video.mp4",
                method7: "VEditBench-Short/animal_0046/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/animal_0046/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.0385,
                    metric_2: 0.2152,
                    metric_3: 0.9584,
                    metric_4: 0.4232,
                    metric_5: 0.8005,
                    metric_6: 0.488,
                    metric_7: 0.8188,
                    metric_8: 0.9808
                },
                method2: {
                    metric_1: 27.1339,
                    metric_2: 0.2168,
                    metric_3: 0.9896,
                    metric_4: 0.4853,
                    metric_5: 0.7958,
                    metric_6: 0.5811,
                    metric_7: 0.7749,
                    metric_8: 0.9766
                },
                method3: {
                    metric_1: 28.4576,
                    metric_2: 0.1846,
                    metric_3: 0.9874,
                    metric_4: 0.5532,
                    metric_5: 0.6581,
                    metric_6: 0.6216,
                    metric_7: 0.7334,
                    metric_8: 0.9827
                },
                method4: {
                    metric_1: 26.0647,
                    metric_2: 0.209,
                    metric_3: 0.987,
                    metric_4: 0.4977,
                    metric_5: 0.7566,
                    metric_6: 0.5529,
                    metric_7: 0.7354,
                    metric_8: 0.9753
                },
                method5: {
                    metric_1: 24.5161,
                    metric_2: 0.1566,
                    metric_3: 0.9855,
                    metric_4: 0.6885,
                    metric_5: 0.7301,
                    metric_6: 0.3509,
                    metric_7: 0.7627,
                    metric_8: 0.9742
                },
                method6: {
                    metric_1: 28.6099,
                    metric_2: 0.2319,
                    metric_3: 0.9758,
                    metric_4: 0.4827,
                    metric_5: 0.6326,
                    metric_6: 0.5756,
                    metric_7: 0.6733,
                    metric_8: 0.9807
                },
                method7: {
                    metric_1: 27.3795,
                    metric_2: 0.1981,
                    metric_3: 0.9849,
                    metric_4: 0.392,
                    metric_5: 0.4018,
                    metric_6: 0.221,
                    metric_7: 0.4512,
                    metric_8: 0.9617
                },
                method8: {
                    metric_1: 26.3882,
                    metric_2: 0.2136,
                    metric_3: 0.9804,
                    metric_4: 0.471,
                    metric_5: 0.4803,
                    metric_6: 0.2203,
                    metric_7: 0.4871,
                    metric_8: 0.9718
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/food_0015/input.mp4",
    category: "Food",
    originalCaption: "A close up of a plate of food filled with stewed meatballs with a fork slicing it apart into two halves.",
    editTypes: {
        'motion-change': {
            editPrompt: "Zoom out the camera.",
            targetPrompt: "Zoom out to reveal a plate of stewed meatballs, with a fork slicing one apart into two halves.",
            resultVideos: {
                method1: "VEditBench-Short/food_0015/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0015/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0015/motion_change/flatten.mp4",
                method4: "VEditBench-Short/food_0015/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0015/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0015/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0015/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0015/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.7506,
                    metric_2: 0.2551,
                    metric_3: 0.8798,
                    metric_4: 0.4091,
                    metric_5: 0.7071,
                    metric_6: 0.2413,
                    metric_7: 0.7915,
                    metric_8: 0.9684
                },
                method2: {
                    metric_1: 27.1189,
                    metric_2: 0.2712,
                    metric_3: 0.8985,
                    metric_4: 0.6732,
                    metric_5: 0.796,
                    metric_6: 0.3349,
                    metric_7: 0.916,
                    metric_8: 0.9614
                },
                method3: {
                    metric_1: 22.6397,
                    metric_2: 0.1377,
                    metric_3: 0.8448,
                    metric_4: 0.653,
                    metric_5: 0.1824,
                    metric_6: 0.0169,
                    metric_7: 0.3501,
                    metric_8: 0.9768
                },
                method4: {
                    metric_1: 27.1436,
                    metric_2: 0.2732,
                    metric_3: 0.866,
                    metric_4: 0.6385,
                    metric_5: 0.7389,
                    metric_6: 0.2635,
                    metric_7: 0.8384,
                    metric_8: 0.9639
                },
                method5: {
                    metric_1: 21.4226,
                    metric_2: 0.1796,
                    metric_3: 0.9111,
                    metric_4: 0.6201,
                    metric_5: 0.4448,
                    metric_6: 0.0936,
                    metric_7: 0.5952,
                    metric_8: 0.9559
                },
                method6: {
                    metric_1: 29.4715,
                    metric_2: 0.2654,
                    metric_3: 0.8863,
                    metric_4: 0.6505,
                    metric_5: 0.266,
                    metric_6: 0.0147,
                    metric_7: 0.4014,
                    metric_8: 0.9661
                },
                method7: {
                    metric_1: 24.2465,
                    metric_2: 0.2041,
                    metric_3: 0.885,
                    metric_4: 0.497,
                    metric_5: 0.342,
                    metric_6: 0.0588,
                    metric_7: 0.4587,
                    metric_8: 0.9072
                },
                method8: {
                    metric_1: 27.5912,
                    metric_2: 0.2651,
                    metric_3: 0.8561,
                    metric_4: 0.4436,
                    metric_5: 0.5891,
                    metric_6: 0.1747,
                    metric_7: 0.7515,
                    metric_8: 0.9622
                }
            }
        },
        'object-change': {
            editPrompt: "Change stewed meatballs with burger",
            targetPrompt: "A close up of a plate of food filled with burger with a fork moving up and down on the center of plate.",
            resultVideos: {
                method1: "VEditBench-Short/food_0015/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0015/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0015/object_change/flatten.mp4",
                method4: "VEditBench-Short/food_0015/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0015/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0015/object_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0015/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0015/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 20.8401,
                    metric_2: 0.1899,
                    metric_3: 0.8572,
                    metric_4: 0.3959,
                    metric_5: 0.6994,
                    metric_6: 0.2862,
                    metric_7: 0.8086,
                    metric_8: 0.9598
                },
                method2: {
                    metric_1: 18.0949,
                    metric_2: 0.1927,
                    metric_3: 0.9007,
                    metric_4: 0.7106,
                    metric_5: 0.8313,
                    metric_6: 0.4433,
                    metric_7: 0.9082,
                    metric_8: 0.9542
                },
                method3: {
                    metric_1: 23.3269,
                    metric_2: 0.1175,
                    metric_3: 0.8471,
                    metric_4: 0.6234,
                    metric_5: 0.257,
                    metric_6: 0.2283,
                    metric_7: 0.4795,
                    metric_8: 0.9542
                },
                method4: {
                    metric_1: 16.9641,
                    metric_2: 0.1569,
                    metric_3: 0.8933,
                    metric_4: 0.7085,
                    metric_5: 0.7834,
                    metric_6: 0.3519,
                    metric_7: 0.9038,
                    metric_8: 0.955
                },
                method5: {
                    metric_1: 17.3924,
                    metric_2: 0.1468,
                    metric_3: 0.9017,
                    metric_4: 0.6602,
                    metric_5: 0.7296,
                    metric_6: 0.2663,
                    metric_7: 0.8198,
                    metric_8: 0.9604
                },
                method6: {
                    metric_1: 23.8779,
                    metric_2: 0.1659,
                    metric_3: 0.8701,
                    metric_4: 0.6464,
                    metric_5: 0.7531,
                    metric_6: 0.33,
                    metric_7: 0.7944,
                    metric_8: 0.9657
                },
                method7: {
                    metric_1: 23.4389,
                    metric_2: 0.2503,
                    metric_3: 0.8534,
                    metric_4: 0.5354,
                    metric_5: 0.719,
                    metric_6: 0.4203,
                    metric_7: 0.8179,
                    metric_8: 0.9097
                },
                method8: {
                    metric_1: 27.5579,
                    metric_2: 0.2562,
                    metric_3: 0.8295,
                    metric_4: 0.3733,
                    metric_5: 0.5335,
                    metric_6: 0.1804,
                    metric_7: 0.7515,
                    metric_8: 0.9556
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a ranch dip in the plate on the plate.",
            targetPrompt: "A close-up of a plate of stewed meatballs with a fork slicing one apart into two halves, and also having a ranch dip on the plate.",
            resultVideos: {
                method1: "VEditBench-Short/food_0015/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0015/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/food_0015/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/food_0015/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0015/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0015/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/food_0015/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0015/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.7899,
                    metric_2: 0.2721,
                    metric_3: 0.8236,
                    metric_4: 0.3788,
                    metric_5: 0.7038,
                    metric_6: 0.3248,
                    metric_7: 0.7715,
                    metric_8: 0.9606
                },
                method2: {
                    metric_1: 25.5364,
                    metric_2: 0.2809,
                    metric_3: 0.8993,
                    metric_4: 0.6392,
                    metric_5: 0.8346,
                    metric_6: 0.4588,
                    metric_7: 0.9185,
                    metric_8: 0.9539
                },
                method3: {
                    metric_1: 24.1952,
                    metric_2: 0.223,
                    metric_3: 0.8408,
                    metric_4: 0.6624,
                    metric_5: 0.5052,
                    metric_6: 0.1902,
                    metric_7: 0.7412,
                    metric_8: 0.9443
                },
                method4: {
                    metric_1: 23.641,
                    metric_2: 0.2515,
                    metric_3: 0.8818,
                    metric_4: 0.6228,
                    metric_5: 0.7732,
                    metric_6: 0.3643,
                    metric_7: 0.9009,
                    metric_8: 0.955
                },
                method5: {
                    metric_1: 18.5428,
                    metric_2: 0.1454,
                    metric_3: 0.9063,
                    metric_4: 0.7024,
                    metric_5: 0.5793,
                    metric_6: 0.1591,
                    metric_7: 0.6992,
                    metric_8: 0.96
                },
                method6: {
                    metric_1: 26.4069,
                    metric_2: 0.2852,
                    metric_3: 0.8616,
                    metric_4: 0.6228,
                    metric_5: 0.7016,
                    metric_6: 0.2865,
                    metric_7: 0.7676,
                    metric_8: 0.9502
                },
                method7: {
                    metric_1: 20.6907,
                    metric_2: 0.1869,
                    metric_3: 0.8547,
                    metric_4: 0.4662,
                    metric_5: 0.4709,
                    metric_6: 0.1738,
                    metric_7: 0.5322,
                    metric_8: 0.8793
                },
                method8: {
                    metric_1: 26.131,
                    metric_2: 0.2941,
                    metric_3: 0.8758,
                    metric_4: 0.4092,
                    metric_5: 0.5511,
                    metric_6: 0.1601,
                    metric_7: 0.7397,
                    metric_8: 0.9549
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the stewed meatballs.",
            targetPrompt: "A close up of a plate of food with a fork slicing the air in t apart into two halves.",
            resultVideos: {
                method1: "VEditBench-Short/food_0015/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0015/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/food_0015/object_removal/flatten.mp4",
                method4: "VEditBench-Short/food_0015/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0015/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0015/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/food_0015/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0015/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.1799,
                    metric_2: 0.2218,
                    metric_3: 0.8511,
                    metric_4: 0.4137,
                    metric_5: 0.7236,
                    metric_6: 0.2854,
                    metric_7: 0.7983,
                    metric_8: 0.9711
                },
                method2: {
                    metric_1: 18.8928,
                    metric_2: 0.2181,
                    metric_3: 0.8941,
                    metric_4: 0.771,
                    metric_5: 0.8224,
                    metric_6: 0.3658,
                    metric_7: 0.9106,
                    metric_8: 0.9586
                },
                method3: {
                    metric_1: 20.1897,
                    metric_2: 0.145,
                    metric_3: 0.8111,
                    metric_4: 0.5547,
                    metric_5: 0.3304,
                    metric_6: 0.2108,
                    metric_7: 0.5137,
                    metric_8: 0.9787
                },
                method4: {
                    metric_1: 19.0675,
                    metric_2: 0.1885,
                    metric_3: 0.8799,
                    metric_4: 0.7697,
                    metric_5: 0.801,
                    metric_6: 0.3204,
                    metric_7: 0.8984,
                    metric_8: 0.959
                },
                method5: {
                    metric_1: 17.8781,
                    metric_2: 0.2049,
                    metric_3: 0.9102,
                    metric_4: 0.8856,
                    metric_5: 0.6769,
                    metric_6: 0.215,
                    metric_7: 0.7583,
                    metric_8: 0.9631
                },
                method6: {
                    metric_1: 22.0775,
                    metric_2: 0.1876,
                    metric_3: 0.8798,
                    metric_4: 0.6791,
                    metric_5: 0.64,
                    metric_6: 0.2174,
                    metric_7: 0.7466,
                    metric_8: 0.9709
                },
                method7: {
                    metric_1: 21.2972,
                    metric_2: 0.2698,
                    metric_3: 0.8219,
                    metric_4: 0.5207,
                    metric_5: 0.6703,
                    metric_6: 0.3317,
                    metric_7: 0.7393,
                    metric_8: 0.8502
                },
                method8: {
                    metric_1: 23.0663,
                    metric_2: 0.1823,
                    metric_3: 0.8344,
                    metric_4: 0.4269,
                    metric_5: 0.5719,
                    metric_6: 0.1927,
                    metric_7: 0.7461,
                    metric_8: 0.9589
                }
            }
        },
        'scene-change': {
            editPrompt: "Place it on a picnic table outdoors.",
            targetPrompt: "A close-up of a plate of stewed meatballs sliced in half with a fork, placed on a picnic table outdoors.",
            resultVideos: {
                method1: "VEditBench-Short/food_0015/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0015/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0015/scene_change/flatten.mp4",
                method4: "VEditBench-Short/food_0015/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0015/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0015/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0015/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0015/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.2838,
                    metric_2: 0.2602,
                    metric_3: 0.8363,
                    metric_4: 0.3892,
                    metric_5: 0.7172,
                    metric_6: 0.2591,
                    metric_7: 0.8281,
                    metric_8: 0.9621
                },
                method2: {
                    metric_1: 25.0189,
                    metric_2: 0.2322,
                    metric_3: 0.9029,
                    metric_4: 0.5766,
                    metric_5: 0.8508,
                    metric_6: 0.3955,
                    metric_7: 0.9404,
                    metric_8: 0.9528
                },
                method3: {
                    metric_1: 15.5968,
                    metric_2: 0.1571,
                    metric_3: 0.9034,
                    metric_4: 0.5636,
                    metric_5: 0.3209,
                    metric_6: 0.145,
                    metric_7: 0.5654,
                    metric_8: 0.9537
                },
                method4: {
                    metric_1: 21.9205,
                    metric_2: 0.2173,
                    metric_3: 0.8763,
                    metric_4: 0.594,
                    metric_5: 0.8013,
                    metric_6: 0.3709,
                    metric_7: 0.8984,
                    metric_8: 0.9533
                },
                method5: {
                    metric_1: 22.6982,
                    metric_2: 0.2564,
                    metric_3: 0.8884,
                    metric_4: 0.4368,
                    metric_5: 0.5718,
                    metric_6: 0.1363,
                    metric_7: 0.7217,
                    metric_8: 0.951
                },
                method6: {
                    metric_1: 26.3819,
                    metric_2: 0.2671,
                    metric_3: 0.8759,
                    metric_4: 0.6503,
                    metric_5: 0.5597,
                    metric_6: 0.123,
                    metric_7: 0.6562,
                    metric_8: 0.9624
                },
                method7: {
                    metric_1: 21.1206,
                    metric_2: 0.1865,
                    metric_3: 0.8602,
                    metric_4: 0.4573,
                    metric_5: 0.3278,
                    metric_6: 0.0436,
                    metric_7: 0.4792,
                    metric_8: 0.9146
                },
                method8: {
                    metric_1: 23.2792,
                    metric_2: 0.2621,
                    metric_3: 0.82,
                    metric_4: 0.3045,
                    metric_5: 0.55,
                    metric_6: 0.1069,
                    metric_7: 0.7192,
                    metric_8: 0.9614
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Vector Art style",
            targetPrompt: "A close up of a plate of food filled with stewed meatballs with a fork slicing it apart into two halves, depicted in a Vector Art style",
            resultVideos: {
                method1: "VEditBench-Short/food_0015/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0015/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/food_0015/stylization/flatten.mp4",
                method4: "VEditBench-Short/food_0015/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0015/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0015/stylization/pix2video.mp4",
                method7: "VEditBench-Short/food_0015/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0015/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 18.594,
                    metric_2: 0.2236,
                    metric_3: 0.8536,
                    metric_4: 0.4004,
                    metric_5: 0.725,
                    metric_6: 0.2763,
                    metric_7: 0.7876,
                    metric_8: 0.9659
                },
                method2: {
                    metric_1: 23.4903,
                    metric_2: 0.1556,
                    metric_3: 0.8982,
                    metric_4: 0.7785,
                    metric_5: 0.8399,
                    metric_6: 0.3147,
                    metric_7: 0.8911,
                    metric_8: 0.9693
                },
                method3: {
                    metric_1: 23.5419,
                    metric_2: 0.1429,
                    metric_3: 0.8289,
                    metric_4: 0.5615,
                    metric_5: 0.3586,
                    metric_6: 0.1718,
                    metric_7: 0.5195,
                    metric_8: 0.9873
                },
                method4: {
                    metric_1: 23.0671,
                    metric_2: 0.2114,
                    metric_3: 0.9063,
                    metric_4: 0.7774,
                    metric_5: 0.7314,
                    metric_6: 0.2094,
                    metric_7: 0.7798,
                    metric_8: 0.9711
                },
                method5: {
                    metric_1: 26.9034,
                    metric_2: 0.1967,
                    metric_3: 0.8655,
                    metric_4: 0.4911,
                    metric_5: 0.2964,
                    metric_6: 0.2449,
                    metric_7: 0.4607,
                    metric_8: 0.9558
                },
                method6: {
                    metric_1: 32.526,
                    metric_2: 0.2444,
                    metric_3: 0.8496,
                    metric_4: 0.5597,
                    metric_5: 0.5287,
                    metric_6: 0.1843,
                    metric_7: 0.5327,
                    metric_8: 0.9739
                },
                method7: {
                    metric_1: 19.4071,
                    metric_2: 0.1777,
                    metric_3: 0.886,
                    metric_4: 0.4378,
                    metric_5: 0.2962,
                    metric_6: 0.0956,
                    metric_7: 0.4604,
                    metric_8: 0.9182
                },
                method8: {
                    metric_1: 21.6675,
                    metric_2: 0.2297,
                    metric_3: 0.8418,
                    metric_4: 0.3369,
                    metric_5: 0.6263,
                    metric_6: 0.1921,
                    metric_7: 0.7393,
                    metric_8: 0.9603
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/food_0018/input.mp4",
    category: "Food",
    originalCaption: "A person grilling chicken on a grill with tongs",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the person tasting the grilled chicken.",
            targetPrompt: "A person tasting the grilled chicken with tongs.",
            resultVideos: {
                method1: "VEditBench-Short/food_0018/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0018/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0018/motion_change/flatten.mp4",
                method4: "VEditBench-Short/food_0018/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0018/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0018/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0018/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0018/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.9917,
                    metric_2: 0.223,
                    metric_3: 0.9493,
                    metric_4: 0.27,
                    metric_5: 0.8942,
                    metric_6: 0.4897,
                    metric_7: 0.8994,
                    metric_8: 0.9642
                },
                method2: {
                    metric_1: 23.5034,
                    metric_2: 0.2391,
                    metric_3: 0.9703,
                    metric_4: 0.591,
                    metric_5: 0.9613,
                    metric_6: 0.5466,
                    metric_7: 0.9639,
                    metric_8: 0.9207
                },
                method3: {
                    metric_1: 18.8148,
                    metric_2: 0.1565,
                    metric_3: 0.9399,
                    metric_4: 0.472,
                    metric_5: 0.7232,
                    metric_6: 0.3306,
                    metric_7: 0.7739,
                    metric_8: 0.9011
                },
                method4: {
                    metric_1: 22.4443,
                    metric_2: 0.2401,
                    metric_3: 0.9765,
                    metric_4: 0.6042,
                    metric_5: 0.9514,
                    metric_6: 0.5172,
                    metric_7: 0.9404,
                    metric_8: 0.9182
                },
                method5: {
                    metric_1: 24.9259,
                    metric_2: 0.2335,
                    metric_3: 0.9771,
                    metric_4: 0.7286,
                    metric_5: 0.7966,
                    metric_6: 0.5067,
                    metric_7: 0.896,
                    metric_8: 0.9399
                },
                method6: {
                    metric_1: 24.2912,
                    metric_2: 0.2469,
                    metric_3: 0.9631,
                    metric_4: 0.503,
                    metric_5: 0.7822,
                    metric_6: 0.4626,
                    metric_7: 0.8794,
                    metric_8: 0.9341
                },
                method7: {
                    metric_1: 23.6653,
                    metric_2: 0.2608,
                    metric_3: 0.9133,
                    metric_4: 0.298,
                    metric_5: 0.3428,
                    metric_6: 0.1198,
                    metric_7: 0.4707,
                    metric_8: 0.8896
                },
                method8: {
                    metric_1: 24.181,
                    metric_2: 0.2172,
                    metric_3: 0.9501,
                    metric_4: 0.3069,
                    metric_5: 0.6465,
                    metric_6: 0.3082,
                    metric_7: 0.7241,
                    metric_8: 0.9566
                }
            }
        },
        'object-change': {
            editPrompt: "Change the chicken to steak.",
            targetPrompt: "A person grilling steak on a grill with tongs.",
            resultVideos: {
                method1: "VEditBench-Short/food_0018/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0018/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0018/object_change/flatten.mp4",
                method4: "VEditBench-Short/food_0018/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0018/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0018/object_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0018/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0018/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.4042,
                    metric_2: 0.2648,
                    metric_3: 0.9519,
                    metric_4: 0.249,
                    metric_5: 0.7959,
                    metric_6: 0.4725,
                    metric_7: 0.8389,
                    metric_8: 0.9665
                },
                method2: {
                    metric_1: 25.4237,
                    metric_2: 0.2743,
                    metric_3: 0.9702,
                    metric_4: 0.6992,
                    metric_5: 0.7435,
                    metric_6: 0.5581,
                    metric_7: 0.9331,
                    metric_8: 0.9381
                },
                method3: {
                    metric_1: 25.7084,
                    metric_2: 0.2693,
                    metric_3: 0.9668,
                    metric_4: 0.6962,
                    metric_5: 0.8772,
                    metric_6: 0.5948,
                    metric_7: 0.8823,
                    metric_8: 0.952
                },
                method4: {
                    metric_1: 24.9435,
                    metric_2: 0.2777,
                    metric_3: 0.9757,
                    metric_4: 0.686,
                    metric_5: 0.8272,
                    metric_6: 0.5598,
                    metric_7: 0.9331,
                    metric_8: 0.9319
                },
                method5: {
                    metric_1: 22.1332,
                    metric_2: 0.255,
                    metric_3: 0.9756,
                    metric_4: 0.7731,
                    metric_5: 0.7865,
                    metric_6: 0.4856,
                    metric_7: 0.8828,
                    metric_8: 0.9461
                },
                method6: {
                    metric_1: 25.6923,
                    metric_2: 0.2774,
                    metric_3: 0.9727,
                    metric_4: 0.497,
                    metric_5: 0.7421,
                    metric_6: 0.4832,
                    metric_7: 0.8774,
                    metric_8: 0.9475
                },
                method7: {
                    metric_1: 25.0736,
                    metric_2: 0.2791,
                    metric_3: 0.9241,
                    metric_4: 0.2683,
                    metric_5: 0.4857,
                    metric_6: 0.2559,
                    metric_7: 0.5747,
                    metric_8: 0.8715
                },
                method8: {
                    metric_1: 25.3376,
                    metric_2: 0.2388,
                    metric_3: 0.9607,
                    metric_4: 0.3428,
                    metric_5: 0.6395,
                    metric_6: 0.3442,
                    metric_7: 0.7397,
                    metric_8: 0.9486
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add corn on a grill",
            targetPrompt: "A person grilling chicken and corn on a grill with tongs",
            resultVideos: {
                method1: "VEditBench-Short/food_0018/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0018/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/food_0018/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/food_0018/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0018/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0018/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/food_0018/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0018/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.4433,
                    metric_2: 0.3195,
                    metric_3: 0.9496,
                    metric_4: 0.245,
                    metric_5: 0.8374,
                    metric_6: 0.4586,
                    metric_7: 0.8672,
                    metric_8: 0.9597
                },
                method2: {
                    metric_1: 25.5307,
                    metric_2: 0.2575,
                    metric_3: 0.9757,
                    metric_4: 0.6571,
                    metric_5: 0.9796,
                    metric_6: 0.586,
                    metric_7: 0.958,
                    metric_8: 0.93
                },
                method3: {
                    metric_1: 27.0956,
                    metric_2: 0.2367,
                    metric_3: 0.9592,
                    metric_4: 0.567,
                    metric_5: 0.9162,
                    metric_6: 0.5214,
                    metric_7: 0.9727,
                    metric_8: 0.9335
                },
                method4: {
                    metric_1: 25.8796,
                    metric_2: 0.2583,
                    metric_3: 0.9805,
                    metric_4: 0.66,
                    metric_5: 0.9256,
                    metric_6: 0.5375,
                    metric_7: 0.9263,
                    metric_8: 0.9284
                },
                method5: {
                    metric_1: 27.4256,
                    metric_2: 0.2927,
                    metric_3: 0.979,
                    metric_4: 0.7663,
                    metric_5: 0.8626,
                    metric_6: 0.5516,
                    metric_7: 0.9302,
                    metric_8: 0.949
                },
                method6: {
                    metric_1: 27.0238,
                    metric_2: 0.3111,
                    metric_3: 0.9646,
                    metric_4: 0.5072,
                    metric_5: 0.8293,
                    metric_6: 0.5707,
                    metric_7: 0.9189,
                    metric_8: 0.9463
                },
                method7: {
                    metric_1: 26.3468,
                    metric_2: 0.3088,
                    metric_3: 0.8773,
                    metric_4: 0.2476,
                    metric_5: 0.4581,
                    metric_6: 0.2155,
                    metric_7: 0.5562,
                    metric_8: 0.8948
                },
                method8: {
                    metric_1: 27.5261,
                    metric_2: 0.2723,
                    metric_3: 0.966,
                    metric_4: 0.3249,
                    metric_5: 0.6023,
                    metric_6: 0.2766,
                    metric_7: 0.7046,
                    metric_8: 0.9608
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the grilling chicken",
            targetPrompt: "A person using tongs and is moving it around the grill.",
            resultVideos: {
                method1: "VEditBench-Short/food_0018/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0018/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/food_0018/object_removal/flatten.mp4",
                method4: "VEditBench-Short/food_0018/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0018/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0018/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/food_0018/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0018/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.2488,
                    metric_2: 0.2065,
                    metric_3: 0.9482,
                    metric_4: 0.2525,
                    metric_5: 0.8118,
                    metric_6: 0.4363,
                    metric_7: 0.832,
                    metric_8: 0.9651
                },
                method2: {
                    metric_1: 22.3567,
                    metric_2: 0.1992,
                    metric_3: 0.9777,
                    metric_4: 0.7039,
                    metric_5: 0.5289,
                    metric_6: 0.3909,
                    metric_7: 0.6914,
                    metric_8: 0.941
                },
                method3: {
                    metric_1: 21.609,
                    metric_2: 0.2159,
                    metric_3: 0.9672,
                    metric_4: 0.4936,
                    metric_5: 0.3662,
                    metric_6: 0.3173,
                    metric_7: 0.5625,
                    metric_8: 0.9509
                },
                method4: {
                    metric_1: 21.6978,
                    metric_2: 0.2107,
                    metric_3: 0.9749,
                    metric_4: 0.6698,
                    metric_5: 0.6493,
                    metric_6: 0.4779,
                    metric_7: 0.8164,
                    metric_8: 0.9347
                },
                method5: {
                    metric_1: 21.4802,
                    metric_2: 0.2056,
                    metric_3: 0.9779,
                    metric_4: 0.7868,
                    metric_5: 0.8212,
                    metric_6: 0.5082,
                    metric_7: 0.8916,
                    metric_8: 0.9448
                },
                method6: {
                    metric_1: 23.1066,
                    metric_2: 0.2137,
                    metric_3: 0.9752,
                    metric_4: 0.5153,
                    metric_5: 0.5622,
                    metric_6: 0.3481,
                    metric_7: 0.7134,
                    metric_8: 0.9515
                },
                method7: {
                    metric_1: 23.075,
                    metric_2: 0.2413,
                    metric_3: 0.8961,
                    metric_4: 0.2764,
                    metric_5: 0.7147,
                    metric_6: 0.4297,
                    metric_7: 0.7427,
                    metric_8: 0.9072
                },
                method8: {
                    metric_1: 22.1488,
                    metric_2: 0.2164,
                    metric_3: 0.976,
                    metric_4: 0.3531,
                    metric_5: 0.6337,
                    metric_6: 0.3057,
                    metric_7: 0.7266,
                    metric_8: 0.9436
                }
            }
        },
        'scene-change': {
            editPrompt: "Place the person in a snowy mountain setting.",
            targetPrompt: "A person grilling chicken on a grill with tongs in a snowy mountain setting.",
            resultVideos: {
                method1: "VEditBench-Short/food_0018/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0018/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0018/scene_change/flatten.mp4",
                method4: "VEditBench-Short/food_0018/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0018/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0018/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0018/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0018/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.5495,
                    metric_2: 0.2179,
                    metric_3: 0.957,
                    metric_4: 0.2516,
                    metric_5: 0.7356,
                    metric_6: 0.3325,
                    metric_7: 0.8071,
                    metric_8: 0.9642
                },
                method2: {
                    metric_1: 22.3549,
                    metric_2: 0.2157,
                    metric_3: 0.978,
                    metric_4: 0.6948,
                    metric_5: 0.6744,
                    metric_6: 0.4577,
                    metric_7: 0.8203,
                    metric_8: 0.9443
                },
                method3: {
                    metric_1: 20.8638,
                    metric_2: 0.1863,
                    metric_3: 0.9548,
                    metric_4: 0.4655,
                    metric_5: 0.5001,
                    metric_6: 0.269,
                    metric_7: 0.5786,
                    metric_8: 0.9444
                },
                method4: {
                    metric_1: 22.2405,
                    metric_2: 0.2225,
                    metric_3: 0.9765,
                    metric_4: 0.6767,
                    metric_5: 0.7413,
                    metric_6: 0.4574,
                    metric_7: 0.8135,
                    metric_8: 0.9358
                },
                method5: {
                    metric_1: 24.4626,
                    metric_2: 0.2258,
                    metric_3: 0.9735,
                    metric_4: 0.6772,
                    metric_5: 0.7945,
                    metric_6: 0.4764,
                    metric_7: 0.8555,
                    metric_8: 0.9468
                },
                method6: {
                    metric_1: 22.5298,
                    metric_2: 0.2237,
                    metric_3: 0.9666,
                    metric_4: 0.5265,
                    metric_5: 0.7653,
                    metric_6: 0.4392,
                    metric_7: 0.7988,
                    metric_8: 0.9466
                },
                method7: {
                    metric_1: 23.6098,
                    metric_2: 0.2159,
                    metric_3: 0.9095,
                    metric_4: 0.2532,
                    metric_5: 0.3875,
                    metric_6: 0.1185,
                    metric_7: 0.4792,
                    metric_8: 0.8852
                },
                method8: {
                    metric_1: 25.2333,
                    metric_2: 0.194,
                    metric_3: 0.9628,
                    metric_4: 0.3502,
                    metric_5: 0.5984,
                    metric_6: 0.2437,
                    metric_7: 0.7305,
                    metric_8: 0.954
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Minecraft style",
            targetPrompt: "A person grilling chicken on a grill with tongs, depicted in a Minecraft style",
            resultVideos: {
                method1: "VEditBench-Short/food_0018/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0018/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/food_0018/stylization/flatten.mp4",
                method4: "VEditBench-Short/food_0018/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0018/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0018/stylization/pix2video.mp4",
                method7: "VEditBench-Short/food_0018/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0018/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.4185,
                    metric_2: 0.2081,
                    metric_3: 0.9631,
                    metric_4: 0.2732,
                    metric_5: 0.7913,
                    metric_6: 0.3869,
                    metric_7: 0.8125,
                    metric_8: 0.9703
                },
                method2: {
                    metric_1: 25.4282,
                    metric_2: 0.2093,
                    metric_3: 0.9713,
                    metric_4: 0.69,
                    metric_5: 0.648,
                    metric_6: 0.485,
                    metric_7: 0.813,
                    metric_8: 0.957
                },
                method3: {
                    metric_1: 28.4593,
                    metric_2: 0.3064,
                    metric_3: 0.9669,
                    metric_4: 0.4891,
                    metric_5: 0.2924,
                    metric_6: 0.2467,
                    metric_7: 0.4243,
                    metric_8: 0.9651
                },
                method4: {
                    metric_1: 24.9783,
                    metric_2: 0.2242,
                    metric_3: 0.9801,
                    metric_4: 0.7096,
                    metric_5: 0.7932,
                    metric_6: 0.5175,
                    metric_7: 0.8921,
                    metric_8: 0.9468
                },
                method5: {
                    metric_1: 26.8257,
                    metric_2: 0.2166,
                    metric_3: 0.9739,
                    metric_4: 0.6731,
                    metric_5: 0.6778,
                    metric_6: 0.3898,
                    metric_7: 0.7642,
                    metric_8: 0.9665
                },
                method6: {
                    metric_1: 24.9786,
                    metric_2: 0.2189,
                    metric_3: 0.9638,
                    metric_4: 0.5324,
                    metric_5: 0.6546,
                    metric_6: 0.3918,
                    metric_7: 0.7524,
                    metric_8: 0.9562
                },
                method7: {
                    metric_1: 25.8761,
                    metric_2: 0.2187,
                    metric_3: 0.9185,
                    metric_4: 0.2778,
                    metric_5: 0.4461,
                    metric_6: 0.21,
                    metric_7: 0.5454,
                    metric_8: 0.9166
                },
                method8: {
                    metric_1: 26.9531,
                    metric_2: 0.207,
                    metric_3: 0.9594,
                    metric_4: 0.3306,
                    metric_5: 0.6122,
                    metric_6: 0.2634,
                    metric_7: 0.7183,
                    metric_8: 0.9494
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/food_0021/input.mp4",
    category: "Food",
    originalCaption: "The pancakes are being cooked on a grill over an open fire and the person is flipping them over to ensure they are cooked evenly.",
    editTypes: {
        'motion-change': {
            editPrompt: "Rotate the camera counterclockwise.",
            targetPrompt: "The camera, rotated counterclockwise, captures the person flipping pancakes on a grill over an open fire to ensure they are cooked evenly.",
            resultVideos: {
                method1: "VEditBench-Short/food_0021/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0021/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0021/motion_change/flatten.mp4",
                method4: "VEditBench-Short/food_0021/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0021/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0021/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0021/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0021/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.8436,
                    metric_2: 0.2739,
                    metric_3: 0.8733,
                    metric_4: 0.2717,
                    metric_5: 0.6785,
                    metric_6: 0.3333,
                    metric_7: 0.729,
                    metric_8: 0.9595
                },
                method2: {
                    metric_1: 22.964,
                    metric_2: 0.1989,
                    metric_3: 0.9478,
                    metric_4: 0.6252,
                    metric_5: 0.4983,
                    metric_6: 0.2746,
                    metric_7: 0.6562,
                    metric_8: 0.9404
                },
                method3: {
                    metric_1: 26.9378,
                    metric_2: 0.2381,
                    metric_3: 0.9387,
                    metric_4: 0.7571,
                    metric_5: 0.394,
                    metric_6: 0.1521,
                    metric_7: 0.4419,
                    metric_8: 0.9477
                },
                method4: {
                    metric_1: 23.8702,
                    metric_2: 0.2412,
                    metric_3: 0.9567,
                    metric_4: 0.6343,
                    metric_5: 0.6975,
                    metric_6: 0.3837,
                    metric_7: 0.7466,
                    metric_8: 0.9388
                },
                method5: {
                    metric_1: 26.299,
                    metric_2: 0.2473,
                    metric_3: 0.9523,
                    metric_4: 0.7877,
                    metric_5: 0.6553,
                    metric_6: 0.3653,
                    metric_7: 0.6714,
                    metric_8: 0.9445
                },
                method6: {
                    metric_1: 26.9887,
                    metric_2: 0.2809,
                    metric_3: 0.8976,
                    metric_4: 0.5113,
                    metric_5: 0.5408,
                    metric_6: 0.3289,
                    metric_7: 0.6704,
                    metric_8: 0.9583
                },
                method7: {
                    metric_1: 27.1723,
                    metric_2: 0.2349,
                    metric_3: 0.8092,
                    metric_4: 0.1846,
                    metric_5: 0.2861,
                    metric_6: 0.1157,
                    metric_7: 0.4392,
                    metric_8: 0.9309
                },
                method8: {
                    metric_1: 25.7526,
                    metric_2: 0.2706,
                    metric_3: 0.8098,
                    metric_4: 0.3578,
                    metric_5: 0.615,
                    metric_6: 0.311,
                    metric_7: 0.6484,
                    metric_8: 0.9209
                }
            }
        },
        'object-change': {
            editPrompt: "Change the pancakes to hamburgers.",
            targetPrompt: "The hamburgers are being cooked on a grill over an open fire, and the person is flipping them over to ensure they are cooked evenly.",
            resultVideos: {
                method1: "VEditBench-Short/food_0021/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0021/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0021/object_change/flatten.mp4",
                method4: "VEditBench-Short/food_0021/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0021/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0021/object_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0021/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0021/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 31.1532,
                    metric_2: 0.2845,
                    metric_3: 0.8975,
                    metric_4: 0.2872,
                    metric_5: 0.6939,
                    metric_6: 0.3192,
                    metric_7: 0.7334,
                    metric_8: 0.9666
                },
                method2: {
                    metric_1: 23.5787,
                    metric_2: 0.214,
                    metric_3: 0.934,
                    metric_4: 0.6059,
                    metric_5: 0.6799,
                    metric_6: 0.3995,
                    metric_7: 0.7607,
                    metric_8: 0.9409
                },
                method3: {
                    metric_1: 25.4781,
                    metric_2: 0.2385,
                    metric_3: 0.9227,
                    metric_4: 0.6508,
                    metric_5: 0.6593,
                    metric_6: 0.4426,
                    metric_7: 0.77,
                    metric_8: 0.9483
                },
                method4: {
                    metric_1: 24.746,
                    metric_2: 0.239,
                    metric_3: 0.9518,
                    metric_4: 0.5877,
                    metric_5: 0.7643,
                    metric_6: 0.4565,
                    metric_7: 0.8198,
                    metric_8: 0.9394
                },
                method5: {
                    metric_1: 30.0589,
                    metric_2: 0.2801,
                    metric_3: 0.9462,
                    metric_4: 0.7203,
                    metric_5: 0.6752,
                    metric_6: 0.4011,
                    metric_7: 0.7368,
                    metric_8: 0.9474
                },
                method6: {
                    metric_1: 28.2693,
                    metric_2: 0.2651,
                    metric_3: 0.8828,
                    metric_4: 0.4461,
                    metric_5: 0.5689,
                    metric_6: 0.3238,
                    metric_7: 0.6904,
                    metric_8: 0.9505
                },
                method7: {
                    metric_1: 26.6847,
                    metric_2: 0.2472,
                    metric_3: 0.8111,
                    metric_4: 0.169,
                    metric_5: 0.1997,
                    metric_6: 0.0586,
                    metric_7: 0.2961,
                    metric_8: 0.9341
                },
                method8: {
                    metric_1: 27.0715,
                    metric_2: 0.2559,
                    metric_3: 0.897,
                    metric_4: 0.3713,
                    metric_5: 0.5807,
                    metric_6: 0.2546,
                    metric_7: 0.5791,
                    metric_8: 0.925
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add fried potatoes on the grill",
            targetPrompt: "The pancakes and potatoes are being cooked on a grill over an open fire, while the person is flipping them to ensure even cooking.",
            resultVideos: {
                method1: "VEditBench-Short/food_0021/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0021/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/food_0021/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/food_0021/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0021/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0021/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/food_0021/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0021/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 33.4131,
                    metric_2: 0.3117,
                    metric_3: 0.8955,
                    metric_4: 0.3015,
                    metric_5: 0.6627,
                    metric_6: 0.3402,
                    metric_7: 0.7329,
                    metric_8: 0.9639
                },
                method2: {
                    metric_1: 28.4568,
                    metric_2: 0.3222,
                    metric_3: 0.9384,
                    metric_4: 0.6167,
                    metric_5: 0.6841,
                    metric_6: 0.4069,
                    metric_7: 0.748,
                    metric_8: 0.9424
                },
                method3: {
                    metric_1: 31.7481,
                    metric_2: 0.2962,
                    metric_3: 0.9417,
                    metric_4: 0.7146,
                    metric_5: 0.7697,
                    metric_6: 0.4338,
                    metric_7: 0.7617,
                    metric_8: 0.948
                },
                method4: {
                    metric_1: 27.9322,
                    metric_2: 0.3207,
                    metric_3: 0.955,
                    metric_4: 0.6137,
                    metric_5: 0.7601,
                    metric_6: 0.4378,
                    metric_7: 0.8096,
                    metric_8: 0.9402
                },
                method5: {
                    metric_1: 28.9106,
                    metric_2: 0.3073,
                    metric_3: 0.9521,
                    metric_4: 0.704,
                    metric_5: 0.7223,
                    metric_6: 0.3904,
                    metric_7: 0.7368,
                    metric_8: 0.9394
                },
                method6: {
                    metric_1: 26.4377,
                    metric_2: 0.2716,
                    metric_3: 0.922,
                    metric_4: 0.4733,
                    metric_5: 0.6053,
                    metric_6: 0.3574,
                    metric_7: 0.7329,
                    metric_8: 0.9525
                },
                method7: {
                    metric_1: 29.755,
                    metric_2: 0.2721,
                    metric_3: 0.8194,
                    metric_4: 0.1678,
                    metric_5: 0.3182,
                    metric_6: 0.1304,
                    metric_7: 0.4297,
                    metric_8: 0.9395
                },
                method8: {
                    metric_1: 28.8314,
                    metric_2: 0.3131,
                    metric_3: 0.8179,
                    metric_4: 0.3791,
                    metric_5: 0.6029,
                    metric_6: 0.2876,
                    metric_7: 0.644,
                    metric_8: 0.9194
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the pancakes being cooked",
            targetPrompt: "The person is moving his spatula on a grill over an open fire to ensure they are cooked evenly.",
            resultVideos: {
                method1: "VEditBench-Short/food_0021/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0021/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/food_0021/object_removal/flatten.mp4",
                method4: "VEditBench-Short/food_0021/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0021/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0021/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/food_0021/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0021/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.8184,
                    metric_2: 0.2507,
                    metric_3: 0.8935,
                    metric_4: 0.2872,
                    metric_5: 0.6532,
                    metric_6: 0.2697,
                    metric_7: 0.7554,
                    metric_8: 0.9584
                },
                method2: {
                    metric_1: 23.4463,
                    metric_2: 0.2094,
                    metric_3: 0.9275,
                    metric_4: 0.6123,
                    metric_5: 0.7637,
                    metric_6: 0.4189,
                    metric_7: 0.791,
                    metric_8: 0.9427
                },
                method3: {
                    metric_1: 23.9743,
                    metric_2: 0.2382,
                    metric_3: 0.9507,
                    metric_4: 0.7255,
                    metric_5: 0.6376,
                    metric_6: 0.2898,
                    metric_7: 0.6909,
                    metric_8: 0.9446
                },
                method4: {
                    metric_1: 23.9637,
                    metric_2: 0.239,
                    metric_3: 0.9528,
                    metric_4: 0.5938,
                    metric_5: 0.7849,
                    metric_6: 0.4589,
                    metric_7: 0.8306,
                    metric_8: 0.9365
                },
                method5: {
                    metric_1: 24.0244,
                    metric_2: 0.2251,
                    metric_3: 0.9532,
                    metric_4: 0.7906,
                    metric_5: 0.6715,
                    metric_6: 0.3828,
                    metric_7: 0.6826,
                    metric_8: 0.9463
                },
                method6: {
                    metric_1: 24.7723,
                    metric_2: 0.218,
                    metric_3: 0.9092,
                    metric_4: 0.4495,
                    metric_5: 0.7304,
                    metric_6: 0.4424,
                    metric_7: 0.8003,
                    metric_8: 0.9436
                },
                method7: {
                    metric_1: 25.9502,
                    metric_2: 0.2608,
                    metric_3: 0.8637,
                    metric_4: 0.2556,
                    metric_5: 0.2077,
                    metric_6: 0.0441,
                    metric_7: 0.2815,
                    metric_8: 0.925
                },
                method8: {
                    metric_1: 25.0921,
                    metric_2: 0.2554,
                    metric_3: 0.8894,
                    metric_4: 0.412,
                    metric_5: 0.5923,
                    metric_6: 0.264,
                    metric_7: 0.6685,
                    metric_8: 0.9258
                }
            }
        },
        'scene-change': {
            editPrompt: "Set the scene in a busy city park.",
            targetPrompt: "The pancakes are being cooked on a grill over an open fire in a busy city park, and the person is flipping them over to ensure they are cooked evenly.",
            resultVideos: {
                method1: "VEditBench-Short/food_0021/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0021/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0021/scene_change/flatten.mp4",
                method4: "VEditBench-Short/food_0021/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0021/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0021/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0021/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0021/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 30.8207,
                    metric_2: 0.3058,
                    metric_3: 0.9084,
                    metric_4: 0.2805,
                    metric_5: 0.67,
                    metric_6: 0.2919,
                    metric_7: 0.7349,
                    metric_8: 0.9655
                },
                method2: {
                    metric_1: 27.8077,
                    metric_2: 0.2616,
                    metric_3: 0.9422,
                    metric_4: 0.6673,
                    metric_5: 0.7016,
                    metric_6: 0.3679,
                    metric_7: 0.7427,
                    metric_8: 0.9445
                },
                method3: {
                    metric_1: 25.2274,
                    metric_2: 0.229,
                    metric_3: 0.9151,
                    metric_4: 0.6612,
                    metric_5: 0.3388,
                    metric_6: 0.2666,
                    metric_7: 0.5464,
                    metric_8: 0.9515
                },
                method4: {
                    metric_1: 27.1188,
                    metric_2: 0.2794,
                    metric_3: 0.9496,
                    metric_4: 0.6551,
                    metric_5: 0.7445,
                    metric_6: 0.4124,
                    metric_7: 0.7754,
                    metric_8: 0.941
                },
                method5: {
                    metric_1: 27.7341,
                    metric_2: 0.228,
                    metric_3: 0.9415,
                    metric_4: 0.7189,
                    metric_5: 0.5538,
                    metric_6: 0.2871,
                    metric_7: 0.6401,
                    metric_8: 0.9465
                },
                method6: {
                    metric_1: 27.3816,
                    metric_2: 0.2719,
                    metric_3: 0.9277,
                    metric_4: 0.4962,
                    metric_5: 0.6023,
                    metric_6: 0.3965,
                    metric_7: 0.7397,
                    metric_8: 0.9549
                },
                method7: {
                    metric_1: 30.8116,
                    metric_2: 0.2882,
                    metric_3: 0.8015,
                    metric_4: 0.1389,
                    metric_5: 0.2943,
                    metric_6: 0.1265,
                    metric_7: 0.4131,
                    metric_8: 0.937
                },
                method8: {
                    metric_1: 30.4142,
                    metric_2: 0.3017,
                    metric_3: 0.7991,
                    metric_4: 0.3487,
                    metric_5: 0.659,
                    metric_6: 0.3014,
                    metric_7: 0.6797,
                    metric_8: 0.926
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Cybernetic style",
            targetPrompt: "The pancakes are being cooked on a grill over an open fire and the person is flipping them over to ensure they are cooked evenly, depicted in a Cybernetic style",
            resultVideos: {
                method1: "VEditBench-Short/food_0021/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0021/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/food_0021/stylization/flatten.mp4",
                method4: "VEditBench-Short/food_0021/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0021/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0021/stylization/pix2video.mp4",
                method7: "VEditBench-Short/food_0021/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0021/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.4456,
                    metric_2: 0.2956,
                    metric_3: 0.877,
                    metric_4: 0.2901,
                    metric_5: 0.7117,
                    metric_6: 0.3736,
                    metric_7: 0.7422,
                    metric_8: 0.9633
                },
                method2: {
                    metric_1: 26.5029,
                    metric_2: 0.224,
                    metric_3: 0.9392,
                    metric_4: 0.622,
                    metric_5: 0.6054,
                    metric_6: 0.3326,
                    metric_7: 0.7329,
                    metric_8: 0.9406
                },
                method3: {
                    metric_1: 28.5876,
                    metric_2: 0.2019,
                    metric_3: 0.9038,
                    metric_4: 0.5637,
                    metric_5: 0.5246,
                    metric_6: 0.3735,
                    metric_7: 0.6235,
                    metric_8: 0.9587
                },
                method4: {
                    metric_1: 26.8065,
                    metric_2: 0.2698,
                    metric_3: 0.9542,
                    metric_4: 0.6161,
                    metric_5: 0.7185,
                    metric_6: 0.4166,
                    metric_7: 0.751,
                    metric_8: 0.9371
                },
                method5: {
                    metric_1: 31.5595,
                    metric_2: 0.2613,
                    metric_3: 0.9501,
                    metric_4: 0.7157,
                    metric_5: 0.6564,
                    metric_6: 0.3231,
                    metric_7: 0.6802,
                    metric_8: 0.9467
                },
                method6: {
                    metric_1: 30.3057,
                    metric_2: 0.2358,
                    metric_3: 0.8819,
                    metric_4: 0.4945,
                    metric_5: 0.5298,
                    metric_6: 0.4148,
                    metric_7: 0.5693,
                    metric_8: 0.9566
                },
                method7: {
                    metric_1: 31.5259,
                    metric_2: 0.2793,
                    metric_3: 0.8456,
                    metric_4: 0.1943,
                    metric_5: 0.2549,
                    metric_6: 0.1288,
                    metric_7: 0.3489,
                    metric_8: 0.9332
                },
                method8: {
                    metric_1: 29.8753,
                    metric_2: 0.2998,
                    metric_3: 0.8667,
                    metric_4: 0.3573,
                    metric_5: 0.575,
                    metric_6: 0.2795,
                    metric_7: 0.604,
                    metric_8: 0.9139
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/food_0024/input.mp4",
    category: "Food",
    originalCaption: "The person is using a blender to make a smoothie with mango and other ingredients.",
    editTypes: {
        'motion-change': {
            editPrompt: "Change the action to the person pouring the smoothie into a glass.",
            targetPrompt: "The person is pouring the smoothie made with mango and other ingredients into a glass.",
            resultVideos: {
                method1: "VEditBench-Short/food_0024/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0024/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0024/motion_change/flatten.mp4",
                method4: "VEditBench-Short/food_0024/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0024/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0024/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0024/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0024/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.9599,
                    metric_2: 0.2385,
                    metric_3: 0.8998,
                    metric_4: 0.2926,
                    metric_5: 0.8046,
                    metric_6: 0.4135,
                    metric_7: 0.8867,
                    metric_8: 0.9892
                },
                method2: {
                    metric_1: 29.0179,
                    metric_2: 0.2475,
                    metric_3: 0.9203,
                    metric_4: 0.7156,
                    metric_5: 0.9742,
                    metric_6: 0.557,
                    metric_7: 0.9814,
                    metric_8: 0.9835
                },
                method3: {
                    metric_1: 21.3515,
                    metric_2: 0.2404,
                    metric_3: 0.9176,
                    metric_4: 0.6359,
                    metric_5: 0.4953,
                    metric_6: 0.2757,
                    metric_7: 0.752,
                    metric_8: 0.9866
                },
                method4: {
                    metric_1: 29.89,
                    metric_2: 0.222,
                    metric_3: 0.9281,
                    metric_4: 0.6846,
                    metric_5: 0.9575,
                    metric_6: 0.5035,
                    metric_7: 0.9741,
                    metric_8: 0.9872
                },
                method5: {
                    metric_1: 27.3654,
                    metric_2: 0.206,
                    metric_3: 0.9303,
                    metric_4: 0.891,
                    metric_5: 0.926,
                    metric_6: 0.5158,
                    metric_7: 0.9595,
                    metric_8: 0.9878
                },
                method6: {
                    metric_1: 29.1758,
                    metric_2: 0.2519,
                    metric_3: 0.9002,
                    metric_4: 0.4919,
                    metric_5: 0.8042,
                    metric_6: 0.4543,
                    metric_7: 0.7935,
                    metric_8: 0.9842
                },
                method7: {
                    metric_1: 31.1802,
                    metric_2: 0.286,
                    metric_3: 0.891,
                    metric_4: 0.3456,
                    metric_5: 0.6535,
                    metric_6: 0.4364,
                    metric_7: 0.6997,
                    metric_8: 0.9766
                },
                method8: {
                    metric_1: 28.3429,
                    metric_2: 0.238,
                    metric_3: 0.9177,
                    metric_4: 0.4268,
                    metric_5: 0.7144,
                    metric_6: 0.4501,
                    metric_7: 0.7808,
                    metric_8: 0.9772
                }
            }
        },
        'object-change': {
            editPrompt: "Change the blender to a food processor.",
            targetPrompt: "The person is using a food processor to make a smoothie with mango and other ingredients.",
            resultVideos: {
                method1: "VEditBench-Short/food_0024/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0024/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0024/object_change/flatten.mp4",
                method4: "VEditBench-Short/food_0024/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0024/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0024/object_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0024/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0024/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.6011,
                    metric_2: 0.2357,
                    metric_3: 0.9113,
                    metric_4: 0.2756,
                    metric_5: 0.7764,
                    metric_6: 0.366,
                    metric_7: 0.8599,
                    metric_8: 0.9907
                },
                method2: {
                    metric_1: 28.7395,
                    metric_2: 0.2339,
                    metric_3: 0.929,
                    metric_4: 0.7141,
                    metric_5: 0.9755,
                    metric_6: 0.5713,
                    metric_7: 0.9849,
                    metric_8: 0.9862
                },
                method3: {
                    metric_1: 27.515,
                    metric_2: 0.2159,
                    metric_3: 0.9341,
                    metric_4: 0.8584,
                    metric_5: 0.7542,
                    metric_6: 0.4186,
                    metric_7: 0.8442,
                    metric_8: 0.9883
                },
                method4: {
                    metric_1: 29.6792,
                    metric_2: 0.2424,
                    metric_3: 0.9302,
                    metric_4: 0.678,
                    metric_5: 0.9558,
                    metric_6: 0.5424,
                    metric_7: 0.96,
                    metric_8: 0.9874
                },
                method5: {
                    metric_1: 26.834,
                    metric_2: 0.1893,
                    metric_3: 0.9322,
                    metric_4: 0.7877,
                    metric_5: 0.9098,
                    metric_6: 0.5025,
                    metric_7: 0.9521,
                    metric_8: 0.9893
                },
                method6: {
                    metric_1: 30.8858,
                    metric_2: 0.2638,
                    metric_3: 0.9011,
                    metric_4: 0.4441,
                    metric_5: 0.8695,
                    metric_6: 0.5444,
                    metric_7: 0.9106,
                    metric_8: 0.9828
                },
                method7: {
                    metric_1: 27.2499,
                    metric_2: 0.1739,
                    metric_3: 0.8818,
                    metric_4: 0.3485,
                    metric_5: 0.3926,
                    metric_6: 0.2214,
                    metric_7: 0.4617,
                    metric_8: 0.9697
                },
                method8: {
                    metric_1: 27.6153,
                    metric_2: 0.2326,
                    metric_3: 0.9238,
                    metric_4: 0.4308,
                    metric_5: 0.6779,
                    metric_6: 0.4125,
                    metric_7: 0.7744,
                    metric_8: 0.9782
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a glass next to the blender.",
            targetPrompt: "The person is using a blender to make a smoothie with mango and other ingredients, and there is a glass next to the blender.",
            resultVideos: {
                method1: "VEditBench-Short/food_0024/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0024/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/food_0024/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/food_0024/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0024/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0024/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/food_0024/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0024/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.2983,
                    metric_2: 0.2341,
                    metric_3: 0.9135,
                    metric_4: 0.2689,
                    metric_5: 0.7706,
                    metric_6: 0.3796,
                    metric_7: 0.8438,
                    metric_8: 0.9861
                },
                method2: {
                    metric_1: 29.7772,
                    metric_2: 0.24,
                    metric_3: 0.9305,
                    metric_4: 0.6947,
                    metric_5: 0.9794,
                    metric_6: 0.5827,
                    metric_7: 0.9834,
                    metric_8: 0.9868
                },
                method3: {
                    metric_1: 27.3852,
                    metric_2: 0.2214,
                    metric_3: 0.9124,
                    metric_4: 0.8692,
                    metric_5: 0.8793,
                    metric_6: 0.4598,
                    metric_7: 0.9487,
                    metric_8: 0.9887
                },
                method4: {
                    metric_1: 29.3964,
                    metric_2: 0.2266,
                    metric_3: 0.9308,
                    metric_4: 0.6674,
                    metric_5: 0.993,
                    metric_6: 0.583,
                    metric_7: 0.9863,
                    metric_8: 0.9877
                },
                method5: {
                    metric_1: 27.2159,
                    metric_2: 0.2148,
                    metric_3: 0.9263,
                    metric_4: 0.8711,
                    metric_5: 0.8903,
                    metric_6: 0.4991,
                    metric_7: 0.9448,
                    metric_8: 0.989
                },
                method6: {
                    metric_1: 28.4548,
                    metric_2: 0.233,
                    metric_3: 0.8913,
                    metric_4: 0.4469,
                    metric_5: 0.7819,
                    metric_6: 0.4985,
                    metric_7: 0.8481,
                    metric_8: 0.9822
                },
                method7: {
                    metric_1: 27.3647,
                    metric_2: 0.1907,
                    metric_3: 0.8882,
                    metric_4: 0.364,
                    metric_5: 0.3825,
                    metric_6: 0.2052,
                    metric_7: 0.4719,
                    metric_8: 0.973
                },
                method8: {
                    metric_1: 28.1394,
                    metric_2: 0.2267,
                    metric_3: 0.9236,
                    metric_4: 0.4241,
                    metric_5: 0.6879,
                    metric_6: 0.4203,
                    metric_7: 0.7778,
                    metric_8: 0.978
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the mango.",
            targetPrompt: "The person is using a blender to make a smoothie with other ingredients.",
            resultVideos: {
                method1: "VEditBench-Short/food_0024/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0024/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/food_0024/object_removal/flatten.mp4",
                method4: "VEditBench-Short/food_0024/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0024/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0024/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/food_0024/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0024/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.2342,
                    metric_2: 0.202,
                    metric_3: 0.9099,
                    metric_4: 0.2859,
                    metric_5: 0.7831,
                    metric_6: 0.4373,
                    metric_7: 0.8755,
                    metric_8: 0.9914
                },
                method2: {
                    metric_1: 26.5671,
                    metric_2: 0.1962,
                    metric_3: 0.9304,
                    metric_4: 0.7157,
                    metric_5: 0.9854,
                    metric_6: 0.6223,
                    metric_7: 0.9888,
                    metric_8: 0.9867
                },
                method3: {
                    metric_1: 21.7059,
                    metric_2: 0.1605,
                    metric_3: 0.9309,
                    metric_4: 0.8699,
                    metric_5: 0.8711,
                    metric_6: 0.4912,
                    metric_7: 0.958,
                    metric_8: 0.9891
                },
                method4: {
                    metric_1: 25.9456,
                    metric_2: 0.2118,
                    metric_3: 0.9285,
                    metric_4: 0.6528,
                    metric_5: 0.9714,
                    metric_6: 0.5336,
                    metric_7: 0.9756,
                    metric_8: 0.9858
                },
                method5: {
                    metric_1: 25.5676,
                    metric_2: 0.205,
                    metric_3: 0.9283,
                    metric_4: 0.8751,
                    metric_5: 0.9042,
                    metric_6: 0.4933,
                    metric_7: 0.9541,
                    metric_8: 0.9871
                },
                method6: {
                    metric_1: 27.0721,
                    metric_2: 0.2179,
                    metric_3: 0.9082,
                    metric_4: 0.4783,
                    metric_5: 0.7162,
                    metric_6: 0.4478,
                    metric_7: 0.7437,
                    metric_8: 0.9817
                },
                method7: {
                    metric_1: 26.8121,
                    metric_2: 0.1875,
                    metric_3: 0.9081,
                    metric_4: 0.372,
                    metric_5: 0.4314,
                    metric_6: 0.2309,
                    metric_7: 0.5088,
                    metric_8: 0.9685
                },
                method8: {
                    metric_1: 25.8936,
                    metric_2: 0.2176,
                    metric_3: 0.9176,
                    metric_4: 0.4272,
                    metric_5: 0.734,
                    metric_6: 0.4998,
                    metric_7: 0.8296,
                    metric_8: 0.9745
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in an outdoor picnic setting.",
            targetPrompt: "The person is using a blender to make a smoothie with mango and other ingredients in an outdoor picnic setting.",
            resultVideos: {
                method1: "VEditBench-Short/food_0024/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0024/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0024/scene_change/flatten.mp4",
                method4: "VEditBench-Short/food_0024/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0024/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0024/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0024/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0024/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.4127,
                    metric_2: 0.1954,
                    metric_3: 0.9074,
                    metric_4: 0.2685,
                    metric_5: 0.7724,
                    metric_6: 0.4045,
                    metric_7: 0.8428,
                    metric_8: 0.9898
                },
                method2: {
                    metric_1: 26.9246,
                    metric_2: 0.212,
                    metric_3: 0.9269,
                    metric_4: 0.6779,
                    metric_5: 0.9945,
                    metric_6: 0.596,
                    metric_7: 0.9771,
                    metric_8: 0.9806
                },
                method3: {
                    metric_1: 23.5926,
                    metric_2: 0.2112,
                    metric_3: 0.915,
                    metric_4: 0.4845,
                    metric_5: 0.7477,
                    metric_6: 0.3131,
                    metric_7: 0.8071,
                    metric_8: 0.964
                },
                method4: {
                    metric_1: 27.8542,
                    metric_2: 0.1894,
                    metric_3: 0.9441,
                    metric_4: 0.6626,
                    metric_5: 0.9586,
                    metric_6: 0.5065,
                    metric_7: 0.9624,
                    metric_8: 0.9849
                },
                method5: {
                    metric_1: 22.6656,
                    metric_2: 0.1835,
                    metric_3: 0.9286,
                    metric_4: 0.7189,
                    metric_5: 0.7555,
                    metric_6: 0.4652,
                    metric_7: 0.8677,
                    metric_8: 0.9819
                },
                method6: {
                    metric_1: 29.5061,
                    metric_2: 0.2579,
                    metric_3: 0.9106,
                    metric_4: 0.4693,
                    metric_5: 0.7045,
                    metric_6: 0.3009,
                    metric_7: 0.7734,
                    metric_8: 0.9808
                },
                method7: {
                    metric_1: 28.0544,
                    metric_2: 0.2202,
                    metric_3: 0.8768,
                    metric_4: 0.3608,
                    metric_5: 0.3572,
                    metric_6: 0.1886,
                    metric_7: 0.4189,
                    metric_8: 0.9655
                },
                method8: {
                    metric_1: 28.5326,
                    metric_2: 0.2468,
                    metric_3: 0.9183,
                    metric_4: 0.3312,
                    metric_5: 0.6788,
                    metric_6: 0.3002,
                    metric_7: 0.7134,
                    metric_8: 0.9739
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Anime Art style",
            targetPrompt: "The person is using a blender to make a smoothie with mango and other ingredients, depicted in a Anime Art style",
            resultVideos: {
                method1: "VEditBench-Short/food_0024/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0024/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/food_0024/stylization/flatten.mp4",
                method4: "VEditBench-Short/food_0024/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0024/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0024/stylization/pix2video.mp4",
                method7: "VEditBench-Short/food_0024/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0024/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.5919,
                    metric_2: 0.2164,
                    metric_3: 0.9123,
                    metric_4: 0.2833,
                    metric_5: 0.7779,
                    metric_6: 0.4303,
                    metric_7: 0.8228,
                    metric_8: 0.9885
                },
                method2: {
                    metric_1: 38.2176,
                    metric_2: 0.2751,
                    metric_3: 0.9217,
                    metric_4: 0.5903,
                    metric_5: 0.7911,
                    metric_6: 0.5028,
                    metric_7: 0.7759,
                    metric_8: 0.9834
                },
                method3: {
                    metric_1: 27.268,
                    metric_2: 0.2509,
                    metric_3: 0.9165,
                    metric_4: 0.5242,
                    metric_5: 0.5031,
                    metric_6: 0.2938,
                    metric_7: 0.646,
                    metric_8: 0.9828
                },
                method4: {
                    metric_1: 36.227,
                    metric_2: 0.1774,
                    metric_3: 0.9293,
                    metric_4: 0.6624,
                    metric_5: 0.9755,
                    metric_6: 0.6319,
                    metric_7: 0.9697,
                    metric_8: 0.9876
                },
                method5: {
                    metric_1: 26.7583,
                    metric_2: 0.191,
                    metric_3: 0.9261,
                    metric_4: 0.7747,
                    metric_5: 0.7025,
                    metric_6: 0.3694,
                    metric_7: 0.7485,
                    metric_8: 0.9891
                },
                method6: {
                    metric_1: 33.5768,
                    metric_2: 0.239,
                    metric_3: 0.8981,
                    metric_4: 0.3998,
                    metric_5: 0.7102,
                    metric_6: 0.4582,
                    metric_7: 0.6982,
                    metric_8: 0.9818
                },
                method7: {
                    metric_1: 28.9017,
                    metric_2: 0.1781,
                    metric_3: 0.8926,
                    metric_4: 0.3497,
                    metric_5: 0.3808,
                    metric_6: 0.2413,
                    metric_7: 0.4727,
                    metric_8: 0.9726
                },
                method8: {
                    metric_1: 29.0728,
                    metric_2: 0.2121,
                    metric_3: 0.9229,
                    metric_4: 0.4082,
                    metric_5: 0.6835,
                    metric_6: 0.464,
                    metric_7: 0.7456,
                    metric_8: 0.9749
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/food_0044/input.mp4",
    category: "Food",
    originalCaption: "A spoon is being used to scoop a dessert out of a glass.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the spoon stirring the dessert.",
            targetPrompt: "A spoon is being used to scoop and stir a dessert out of a glass.",
            resultVideos: {
                method1: "VEditBench-Short/food_0044/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0044/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0044/motion_change/flatten.mp4",
                method4: "VEditBench-Short/food_0044/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0044/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0044/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0044/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0044/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.4398,
                    metric_2: 0.2968,
                    metric_3: 0.8782,
                    metric_4: 0.3616,
                    metric_5: 0.8622,
                    metric_6: 0.4912,
                    metric_7: 0.9062,
                    metric_8: 0.9886
                },
                method2: {
                    metric_1: 25.0568,
                    metric_2: 0.2783,
                    metric_3: 0.8921,
                    metric_4: 0.7766,
                    metric_5: 0.9154,
                    metric_6: 0.5013,
                    metric_7: 0.9258,
                    metric_8: 0.9899
                },
                method3: {
                    metric_1: 23.8971,
                    metric_2: 0.2457,
                    metric_3: 0.8892,
                    metric_4: 0.9072,
                    metric_5: 0.908,
                    metric_6: 0.4848,
                    metric_7: 0.9189,
                    metric_8: 0.9897
                },
                method4: {
                    metric_1: 25.547,
                    metric_2: 0.273,
                    metric_3: 0.8918,
                    metric_4: 0.7824,
                    metric_5: 0.9068,
                    metric_6: 0.4637,
                    metric_7: 0.9238,
                    metric_8: 0.9909
                },
                method5: {
                    metric_1: 24.4334,
                    metric_2: 0.2503,
                    metric_3: 0.8982,
                    metric_4: 0.8875,
                    metric_5: 0.9407,
                    metric_6: 0.5292,
                    metric_7: 0.9331,
                    metric_8: 0.991
                },
                method6: {
                    metric_1: 25.2403,
                    metric_2: 0.2897,
                    metric_3: 0.859,
                    metric_4: 0.5666,
                    metric_5: 0.8535,
                    metric_6: 0.5177,
                    metric_7: 0.8579,
                    metric_8: 0.9859
                },
                method7: {
                    metric_1: 27.564,
                    metric_2: 0.1693,
                    metric_3: 0.8825,
                    metric_4: 0.4081,
                    metric_5: 0.4475,
                    metric_6: 0.1844,
                    metric_7: 0.5127,
                    metric_8: 0.972
                },
                method8: {
                    metric_1: 27.4462,
                    metric_2: 0.2716,
                    metric_3: 0.8787,
                    metric_4: 0.4354,
                    metric_5: 0.6146,
                    metric_6: 0.2121,
                    metric_7: 0.665,
                    metric_8: 0.9857
                }
            }
        },
        'object-change': {
            editPrompt: "Change the spoon to a fork.",
            targetPrompt: "A fork is being used to scoop a dessert out of a glass.",
            resultVideos: {
                method1: "VEditBench-Short/food_0044/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0044/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0044/object_change/flatten.mp4",
                method4: "VEditBench-Short/food_0044/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0044/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0044/object_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0044/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0044/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.9021,
                    metric_2: 0.2793,
                    metric_3: 0.8713,
                    metric_4: 0.3677,
                    metric_5: 0.8092,
                    metric_6: 0.4361,
                    metric_7: 0.8579,
                    metric_8: 0.9914
                },
                method2: {
                    metric_1: 26.0117,
                    metric_2: 0.2919,
                    metric_3: 0.8821,
                    metric_4: 0.7689,
                    metric_5: 0.8948,
                    metric_6: 0.463,
                    metric_7: 0.9141,
                    metric_8: 0.9899
                },
                method3: {
                    metric_1: 25.6609,
                    metric_2: 0.2769,
                    metric_3: 0.8866,
                    metric_4: 0.8789,
                    metric_5: 0.9066,
                    metric_6: 0.4824,
                    metric_7: 0.9253,
                    metric_8: 0.9905
                },
                method4: {
                    metric_1: 27.4536,
                    metric_2: 0.2776,
                    metric_3: 0.8883,
                    metric_4: 0.7716,
                    metric_5: 0.904,
                    metric_6: 0.4798,
                    metric_7: 0.9043,
                    metric_8: 0.9911
                },
                method5: {
                    metric_1: 24.9421,
                    metric_2: 0.2475,
                    metric_3: 0.8982,
                    metric_4: 0.8961,
                    metric_5: 0.9472,
                    metric_6: 0.5353,
                    metric_7: 0.9165,
                    metric_8: 0.9893
                },
                method6: {
                    metric_1: 23.5791,
                    metric_2: 0.2639,
                    metric_3: 0.8683,
                    metric_4: 0.5327,
                    metric_5: 0.8937,
                    metric_6: 0.5377,
                    metric_7: 0.9194,
                    metric_8: 0.9836
                },
                method7: {
                    metric_1: 29.3594,
                    metric_2: 0.2385,
                    metric_3: 0.883,
                    metric_4: 0.3678,
                    metric_5: 0.4677,
                    metric_6: 0.2083,
                    metric_7: 0.5269,
                    metric_8: 0.9701
                },
                method8: {
                    metric_1: 25.2279,
                    metric_2: 0.2686,
                    metric_3: 0.8682,
                    metric_4: 0.3818,
                    metric_5: 0.5728,
                    metric_6: 0.2182,
                    metric_7: 0.6543,
                    metric_8: 0.9817
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a cherry on top of the dessert.",
            targetPrompt: "A spoon is being used to scoop a dessert out of a glass, and a cherry is added on top of the dessert.",
            resultVideos: {
                method1: "VEditBench-Short/food_0044/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0044/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/food_0044/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/food_0044/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0044/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0044/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/food_0044/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0044/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 31.3484,
                    metric_2: 0.3273,
                    metric_3: 0.8701,
                    metric_4: 0.3717,
                    metric_5: 0.8679,
                    metric_6: 0.4947,
                    metric_7: 0.9116,
                    metric_8: 0.9929
                },
                method2: {
                    metric_1: 26.0181,
                    metric_2: 0.3028,
                    metric_3: 0.8919,
                    metric_4: 0.747,
                    metric_5: 0.937,
                    metric_6: 0.531,
                    metric_7: 0.9395,
                    metric_8: 0.9894
                },
                method3: {
                    metric_1: 28.9199,
                    metric_2: 0.3221,
                    metric_3: 0.8827,
                    metric_4: 0.6588,
                    metric_5: 0.846,
                    metric_6: 0.4972,
                    metric_7: 0.8926,
                    metric_8: 0.9857
                },
                method4: {
                    metric_1: 27.2509,
                    metric_2: 0.3077,
                    metric_3: 0.8943,
                    metric_4: 0.7655,
                    metric_5: 0.9006,
                    metric_6: 0.4777,
                    metric_7: 0.9136,
                    metric_8: 0.9907
                },
                method5: {
                    metric_1: 27.2008,
                    metric_2: 0.2758,
                    metric_3: 0.8903,
                    metric_4: 0.8506,
                    metric_5: 0.9503,
                    metric_6: 0.5506,
                    metric_7: 0.9165,
                    metric_8: 0.9903
                },
                method6: {
                    metric_1: 28.4084,
                    metric_2: 0.3295,
                    metric_3: 0.8648,
                    metric_4: 0.5194,
                    metric_5: 0.8742,
                    metric_6: 0.5565,
                    metric_7: 0.8926,
                    metric_8: 0.9859
                },
                method7: {
                    metric_1: 29.3214,
                    metric_2: 0.2828,
                    metric_3: 0.8793,
                    metric_4: 0.4077,
                    metric_5: 0.461,
                    metric_6: 0.1962,
                    metric_7: 0.521,
                    metric_8: 0.9689
                },
                method8: {
                    metric_1: 30.2555,
                    metric_2: 0.3303,
                    metric_3: 0.8634,
                    metric_4: 0.3777,
                    metric_5: 0.7621,
                    metric_6: 0.4317,
                    metric_7: 0.8071,
                    metric_8: 0.984
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the desert.",
            targetPrompt: "A spoon is being used to scoop a an empty glass.",
            resultVideos: {
                method1: "VEditBench-Short/food_0044/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0044/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/food_0044/object_removal/flatten.mp4",
                method4: "VEditBench-Short/food_0044/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0044/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0044/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/food_0044/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0044/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.0426,
                    metric_2: 0.1913,
                    metric_3: 0.8668,
                    metric_4: 0.4233,
                    metric_5: 0.837,
                    metric_6: 0.4632,
                    metric_7: 0.9028,
                    metric_8: 0.9931
                },
                method2: {
                    metric_1: 21.4001,
                    metric_2: 0.1983,
                    metric_3: 0.8839,
                    metric_4: 0.7834,
                    metric_5: 0.9145,
                    metric_6: 0.5357,
                    metric_7: 0.9434,
                    metric_8: 0.9902
                },
                method3: {
                    metric_1: 21.7017,
                    metric_2: 0.1588,
                    metric_3: 0.8842,
                    metric_4: 0.7453,
                    metric_5: 0.7432,
                    metric_6: 0.411,
                    metric_7: 0.8379,
                    metric_8: 0.9901
                },
                method4: {
                    metric_1: 20.047,
                    metric_2: 0.1963,
                    metric_3: 0.8934,
                    metric_4: 0.7915,
                    metric_5: 0.9318,
                    metric_6: 0.4986,
                    metric_7: 0.9536,
                    metric_8: 0.9916
                },
                method5: {
                    metric_1: 18.8929,
                    metric_2: 0.1773,
                    metric_3: 0.9009,
                    metric_4: 0.888,
                    metric_5: 0.9431,
                    metric_6: 0.5374,
                    metric_7: 0.9277,
                    metric_8: 0.9913
                },
                method6: {
                    metric_1: 22.9788,
                    metric_2: 0.2186,
                    metric_3: 0.8663,
                    metric_4: 0.5456,
                    metric_5: 0.7239,
                    metric_6: 0.3293,
                    metric_7: 0.7676,
                    metric_8: 0.9907
                },
                method7: {
                    metric_1: 22.5682,
                    metric_2: 0.1945,
                    metric_3: 0.8853,
                    metric_4: 0.3451,
                    metric_5: 0.5246,
                    metric_6: 0.2787,
                    metric_7: 0.5747,
                    metric_8: 0.9701
                },
                method8: {
                    metric_1: 23.8521,
                    metric_2: 0.2113,
                    metric_3: 0.8793,
                    metric_4: 0.3354,
                    metric_5: 0.6779,
                    metric_6: 0.3028,
                    metric_7: 0.7144,
                    metric_8: 0.9847
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it at a picnic in a park.",
            targetPrompt: "A spoon is being used to scoop a dessert out of a glass, making it perfect for a picnic in a park.",
            resultVideos: {
                method1: "VEditBench-Short/food_0044/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0044/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/food_0044/scene_change/flatten.mp4",
                method4: "VEditBench-Short/food_0044/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0044/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0044/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/food_0044/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0044/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.0919,
                    metric_2: 0.3142,
                    metric_3: 0.8841,
                    metric_4: 0.3751,
                    metric_5: 0.8366,
                    metric_6: 0.4329,
                    metric_7: 0.915,
                    metric_8: 0.9909
                },
                method2: {
                    metric_1: 22.7277,
                    metric_2: 0.2508,
                    metric_3: 0.8893,
                    metric_4: 0.7212,
                    metric_5: 0.9174,
                    metric_6: 0.5449,
                    metric_7: 0.9492,
                    metric_8: 0.9882
                },
                method3: {
                    metric_1: 18.2093,
                    metric_2: 0.1734,
                    metric_3: 0.8813,
                    metric_4: 0.5631,
                    metric_5: 0.762,
                    metric_6: 0.4214,
                    metric_7: 0.7876,
                    metric_8: 0.9829
                },
                method4: {
                    metric_1: 25.3795,
                    metric_2: 0.2735,
                    metric_3: 0.8885,
                    metric_4: 0.7666,
                    metric_5: 0.9521,
                    metric_6: 0.5548,
                    metric_7: 0.9482,
                    metric_8: 0.9904
                },
                method5: {
                    metric_1: 22.7887,
                    metric_2: 0.2302,
                    metric_3: 0.8865,
                    metric_4: 0.5071,
                    metric_5: 0.6466,
                    metric_6: 0.42,
                    metric_7: 0.7373,
                    metric_8: 0.9856
                },
                method6: {
                    metric_1: 28.6106,
                    metric_2: 0.3079,
                    metric_3: 0.869,
                    metric_4: 0.5582,
                    metric_5: 0.9037,
                    metric_6: 0.5349,
                    metric_7: 0.918,
                    metric_8: 0.9873
                },
                method7: {
                    metric_1: 28.4764,
                    metric_2: 0.22,
                    metric_3: 0.882,
                    metric_4: 0.3694,
                    metric_5: 0.415,
                    metric_6: 0.1434,
                    metric_7: 0.4939,
                    metric_8: 0.9685
                },
                method8: {
                    metric_1: 30.4436,
                    metric_2: 0.3392,
                    metric_3: 0.8694,
                    metric_4: 0.3392,
                    metric_5: 0.6279,
                    metric_6: 0.2897,
                    metric_7: 0.7002,
                    metric_8: 0.9841
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Anime Art style",
            targetPrompt: "A spoon is being used to scoop a dessert out of a glass, depicted in a Anime Art style",
            resultVideos: {
                method1: "VEditBench-Short/food_0044/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/food_0044/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/food_0044/stylization/flatten.mp4",
                method4: "VEditBench-Short/food_0044/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/food_0044/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/food_0044/stylization/pix2video.mp4",
                method7: "VEditBench-Short/food_0044/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/food_0044/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.6154,
                    metric_2: 0.2606,
                    metric_3: 0.8733,
                    metric_4: 0.3879,
                    metric_5: 0.8666,
                    metric_6: 0.5006,
                    metric_7: 0.9414,
                    metric_8: 0.992
                },
                method2: {
                    metric_1: 34.0451,
                    metric_2: 0.3295,
                    metric_3: 0.8884,
                    metric_4: 0.762,
                    metric_5: 0.8191,
                    metric_6: 0.5796,
                    metric_7: 0.8452,
                    metric_8: 0.9884
                },
                method3: {
                    metric_1: 27.8145,
                    metric_2: 0.2492,
                    metric_3: 0.8842,
                    metric_4: 0.6663,
                    metric_5: 0.6027,
                    metric_6: 0.351,
                    metric_7: 0.6748,
                    metric_8: 0.9857
                },
                method4: {
                    metric_1: 28.6228,
                    metric_2: 0.2691,
                    metric_3: 0.8924,
                    metric_4: 0.8014,
                    metric_5: 0.9285,
                    metric_6: 0.5894,
                    metric_7: 0.9097,
                    metric_8: 0.9921
                },
                method5: {
                    metric_1: 24.5534,
                    metric_2: 0.2205,
                    metric_3: 0.896,
                    metric_4: 0.743,
                    metric_5: 0.756,
                    metric_6: 0.4725,
                    metric_7: 0.7583,
                    metric_8: 0.9899
                },
                method6: {
                    metric_1: 35.1181,
                    metric_2: 0.3314,
                    metric_3: 0.8652,
                    metric_4: 0.4565,
                    metric_5: 0.7445,
                    metric_6: 0.4131,
                    metric_7: 0.7485,
                    metric_8: 0.983
                },
                method7: {
                    metric_1: 27.4987,
                    metric_2: 0.2091,
                    metric_3: 0.874,
                    metric_4: 0.4082,
                    metric_5: 0.5001,
                    metric_6: 0.2431,
                    metric_7: 0.5469,
                    metric_8: 0.9742
                },
                method8: {
                    metric_1: 24.5516,
                    metric_2: 0.2118,
                    metric_3: 0.8784,
                    metric_4: 0.3827,
                    metric_5: 0.6764,
                    metric_6: 0.2717,
                    metric_7: 0.707,
                    metric_8: 0.9839
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/scenery_0005/input.mp4",
    category: "Scenery",
    originalCaption: "The sun is raising over a mountain range, with the sky turning pink and orange in the distance.",
    editTypes: {
        'motion-change': {
            editPrompt: "Tilt the camera downwards.",
            targetPrompt: "As the sun is rising over a mountain range and the sky turns pink and orange in the distance, tilt the camera downwards.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0005/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0005/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0005/motion_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0005/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0005/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0005/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0005/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0005/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.504,
                    metric_2: 0.2237,
                    metric_3: 0.9747,
                    metric_4: 0.6736,
                    metric_5: 0.5482,
                    metric_6: 0.4781,
                    metric_7: 0.6289,
                    metric_8: 0.9927
                },
                method2: {
                    metric_1: 24.7436,
                    metric_2: 0.227,
                    metric_3: 0.9951,
                    metric_4: 0.8043,
                    metric_5: 0.7093,
                    metric_6: 0.5087,
                    metric_7: 0.7451,
                    metric_8: 0.9887
                },
                method3: {
                    metric_1: 26.3999,
                    metric_2: 0.2164,
                    metric_3: 0.9842,
                    metric_4: 0.7557,
                    metric_5: 0.2653,
                    metric_6: 0.1373,
                    metric_7: 0.3606,
                    metric_8: 0.9917
                },
                method4: {
                    metric_1: 24.1065,
                    metric_2: 0.2043,
                    metric_3: 0.9918,
                    metric_4: 0.7544,
                    metric_5: 0.7346,
                    metric_6: 0.5049,
                    metric_7: 0.7495,
                    metric_8: 0.9846
                },
                method5: {
                    metric_1: 20.6329,
                    metric_2: 0.1475,
                    metric_3: 0.9859,
                    metric_4: 0.5737,
                    metric_5: 0.4557,
                    metric_6: 0.247,
                    metric_7: 0.5239,
                    metric_8: 0.988
                },
                method6: {
                    metric_1: 24.7564,
                    metric_2: 0.2372,
                    metric_3: 0.9865,
                    metric_4: 0.7151,
                    metric_5: 0.4762,
                    metric_6: 0.3936,
                    metric_7: 0.5645,
                    metric_8: 0.9853
                },
                method7: {
                    metric_1: 25.853,
                    metric_2: 0.2365,
                    metric_3: 0.9908,
                    metric_4: 0.6515,
                    metric_5: 0.4287,
                    metric_6: 0.2671,
                    metric_7: 0.4927,
                    metric_8: 0.9841
                },
                method8: {
                    metric_1: 25.1872,
                    metric_2: 0.2345,
                    metric_3: 0.9946,
                    metric_4: 0.6704,
                    metric_5: 0.542,
                    metric_6: 0.43,
                    metric_7: 0.5635,
                    metric_8: 0.9895
                }
            }
        },
        'object-change': {
            editPrompt: "Change the mountain range to a forest.",
            targetPrompt: "The sun is raising over a forest, with the sky turning pink and orange in the distance.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0005/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0005/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0005/object_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0005/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0005/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0005/object_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0005/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0005/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.7629,
                    metric_2: 0.2491,
                    metric_3: 0.9792,
                    metric_4: 0.6897,
                    metric_5: 0.506,
                    metric_6: 0.3426,
                    metric_7: 0.5464,
                    metric_8: 0.9906
                },
                method2: {
                    metric_1: 23.3455,
                    metric_2: 0.2413,
                    metric_3: 0.9912,
                    metric_4: 0.7524,
                    metric_5: 0.7371,
                    metric_6: 0.5188,
                    metric_7: 0.7847,
                    metric_8: 0.9902
                },
                method3: {
                    metric_1: 22.2886,
                    metric_2: 0.1927,
                    metric_3: 0.9898,
                    metric_4: 0.5923,
                    metric_5: 0.5767,
                    metric_6: 0.3109,
                    metric_7: 0.6509,
                    metric_8: 0.9905
                },
                method4: {
                    metric_1: 23.579,
                    metric_2: 0.2406,
                    metric_3: 0.992,
                    metric_4: 0.7146,
                    metric_5: 0.7541,
                    metric_6: 0.5132,
                    metric_7: 0.7808,
                    metric_8: 0.9885
                },
                method5: {
                    metric_1: 18.5654,
                    metric_2: 0.1337,
                    metric_3: 0.9898,
                    metric_4: 0.5878,
                    metric_5: 0.422,
                    metric_6: 0.4386,
                    metric_7: 0.5635,
                    metric_8: 0.9857
                },
                method6: {
                    metric_1: 22.984,
                    metric_2: 0.2103,
                    metric_3: 0.9869,
                    metric_4: 0.5981,
                    metric_5: 0.3944,
                    metric_6: 0.2609,
                    metric_7: 0.425,
                    metric_8: 0.9897
                },
                method7: {
                    metric_1: 24.3637,
                    metric_2: 0.2862,
                    metric_3: 0.9752,
                    metric_4: 0.6095,
                    metric_5: 0.3467,
                    metric_6: 0.1884,
                    metric_7: 0.4282,
                    metric_8: 0.9822
                },
                method8: {
                    metric_1: 21.8154,
                    metric_2: 0.2344,
                    metric_3: 0.9941,
                    metric_4: 0.6967,
                    metric_5: 0.436,
                    metric_6: 0.2712,
                    metric_7: 0.4807,
                    metric_8: 0.989
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a camp fire on the ground.",
            targetPrompt: "The sun is raising over a mountain range, with the sky turning pink and orange in the distance, and a campfire glowing on the ground.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0005/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0005/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0005/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/scenery_0005/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0005/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0005/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0005/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0005/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.0639,
                    metric_2: 0.1844,
                    metric_3: 0.9777,
                    metric_4: 0.6718,
                    metric_5: 0.5446,
                    metric_6: 0.4618,
                    metric_7: 0.6377,
                    metric_8: 0.9918
                },
                method2: {
                    metric_1: 23.2554,
                    metric_2: 0.1752,
                    metric_3: 0.9943,
                    metric_4: 0.786,
                    metric_5: 0.7826,
                    metric_6: 0.5827,
                    metric_7: 0.8354,
                    metric_8: 0.9854
                },
                method3: {
                    metric_1: 27.5726,
                    metric_2: 0.2625,
                    metric_3: 0.985,
                    metric_4: 0.6891,
                    metric_5: 0.5717,
                    metric_6: 0.344,
                    metric_7: 0.7373,
                    metric_8: 0.9663
                },
                method4: {
                    metric_1: 23.3225,
                    metric_2: 0.1887,
                    metric_3: 0.9906,
                    metric_4: 0.7258,
                    metric_5: 0.7933,
                    metric_6: 0.5394,
                    metric_7: 0.8306,
                    metric_8: 0.9788
                },
                method5: {
                    metric_1: 28.2976,
                    metric_2: 0.2784,
                    metric_3: 0.9878,
                    metric_4: 0.7505,
                    metric_5: 0.7391,
                    metric_6: 0.5906,
                    metric_7: 0.7676,
                    metric_8: 0.9871
                },
                method6: {
                    metric_1: 24.8524,
                    metric_2: 0.2214,
                    metric_3: 0.9846,
                    metric_4: 0.6303,
                    metric_5: 0.5628,
                    metric_6: 0.455,
                    metric_7: 0.6421,
                    metric_8: 0.9785
                },
                method7: {
                    metric_1: 26.9451,
                    metric_2: 0.2427,
                    metric_3: 0.9884,
                    metric_4: 0.6139,
                    metric_5: 0.3871,
                    metric_6: 0.229,
                    metric_7: 0.4844,
                    metric_8: 0.9827
                },
                method8: {
                    metric_1: 24.7856,
                    metric_2: 0.2821,
                    metric_3: 0.9941,
                    metric_4: 0.6565,
                    metric_5: 0.4927,
                    metric_6: 0.3531,
                    metric_7: 0.5215,
                    metric_8: 0.9872
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the pink and orange in the sky.",
            targetPrompt: "The sun is raising over a mountain range, with the sky in the distance.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0005/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0005/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0005/object_removal/flatten.mp4",
                method4: "VEditBench-Short/scenery_0005/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0005/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0005/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0005/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0005/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 21.6214,
                    metric_2: 0.1957,
                    metric_3: 0.9773,
                    metric_4: 0.664,
                    metric_5: 0.596,
                    metric_6: 0.3996,
                    metric_7: 0.6421,
                    metric_8: 0.9912
                },
                method2: {
                    metric_1: 21.4976,
                    metric_2: 0.216,
                    metric_3: 0.9949,
                    metric_4: 0.7906,
                    metric_5: 0.7662,
                    metric_6: 0.5373,
                    metric_7: 0.8135,
                    metric_8: 0.9863
                },
                method3: {
                    metric_1: 21.5581,
                    metric_2: 0.1994,
                    metric_3: 0.9834,
                    metric_4: 0.7981,
                    metric_5: 0.275,
                    metric_6: 0.3697,
                    metric_7: 0.428,
                    metric_8: 0.9844
                },
                method4: {
                    metric_1: 21.8552,
                    metric_2: 0.206,
                    metric_3: 0.9918,
                    metric_4: 0.7302,
                    metric_5: 0.7945,
                    metric_6: 0.5389,
                    metric_7: 0.8096,
                    metric_8: 0.9802
                },
                method5: {
                    metric_1: 21.1162,
                    metric_2: 0.2145,
                    metric_3: 0.9869,
                    metric_4: 0.7509,
                    metric_5: 0.6542,
                    metric_6: 0.5324,
                    metric_7: 0.7168,
                    metric_8: 0.9862
                },
                method6: {
                    metric_1: 21.7825,
                    metric_2: 0.2269,
                    metric_3: 0.9866,
                    metric_4: 0.6723,
                    metric_5: 0.5074,
                    metric_6: 0.3396,
                    metric_7: 0.5986,
                    metric_8: 0.9892
                },
                method7: {
                    metric_1: 23.4308,
                    metric_2: 0.2338,
                    metric_3: 0.9876,
                    metric_4: 0.6592,
                    metric_5: 0.5583,
                    metric_6: 0.4427,
                    metric_7: 0.6421,
                    metric_8: 0.9871
                },
                method8: {
                    metric_1: 21.9968,
                    metric_2: 0.2338,
                    metric_3: 0.9954,
                    metric_4: 0.6507,
                    metric_5: 0.5149,
                    metric_6: 0.3923,
                    metric_7: 0.5635,
                    metric_8: 0.9863
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it a city skyline.",
            targetPrompt: "The sun is rising over a city skyline, with the sky turning pink and orange in the distance.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0005/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0005/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0005/scene_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0005/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0005/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0005/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0005/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0005/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 21.9272,
                    metric_2: 0.1895,
                    metric_3: 0.9767,
                    metric_4: 0.6871,
                    metric_5: 0.5336,
                    metric_6: 0.2931,
                    metric_7: 0.584,
                    metric_8: 0.9916
                },
                method2: {
                    metric_1: 26.4987,
                    metric_2: 0.2624,
                    metric_3: 0.9797,
                    metric_4: 0.6924,
                    metric_5: 0.677,
                    metric_6: 0.5062,
                    metric_7: 0.7583,
                    metric_8: 0.9823
                },
                method3: {
                    metric_1: 23.5201,
                    metric_2: 0.2199,
                    metric_3: 0.9858,
                    metric_4: 0.5135,
                    metric_5: 0.8986,
                    metric_6: 0.6782,
                    metric_7: 0.8804,
                    metric_8: 0.9504
                },
                method4: {
                    metric_1: 25.3823,
                    metric_2: 0.2533,
                    metric_3: 0.9919,
                    metric_4: 0.6339,
                    metric_5: 0.6804,
                    metric_6: 0.4871,
                    metric_7: 0.7339,
                    metric_8: 0.9801
                },
                method5: {
                    metric_1: 19.7044,
                    metric_2: 0.103,
                    metric_3: 0.9848,
                    metric_4: 0.5462,
                    metric_5: 0.492,
                    metric_6: 0.4822,
                    metric_7: 0.5938,
                    metric_8: 0.9747
                },
                method6: {
                    metric_1: 25.1218,
                    metric_2: 0.2632,
                    metric_3: 0.9871,
                    metric_4: 0.6844,
                    metric_5: 0.5808,
                    metric_6: 0.4331,
                    metric_7: 0.6582,
                    metric_8: 0.9815
                },
                method7: {
                    metric_1: 26.4321,
                    metric_2: 0.2769,
                    metric_3: 0.9257,
                    metric_4: 0.5715,
                    metric_5: 0.4956,
                    metric_6: 0.3532,
                    metric_7: 0.5908,
                    metric_8: 0.9684
                },
                method8: {
                    metric_1: 23.5953,
                    metric_2: 0.2361,
                    metric_3: 0.9934,
                    metric_4: 0.6438,
                    metric_5: 0.3834,
                    metric_6: 0.2458,
                    metric_7: 0.4734,
                    metric_8: 0.9887
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Cybernetic style",
            targetPrompt: "The sun is raising over a mountain range, with the sky turning pink and orange in the distance, depicted in a Cybernetic style",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0005/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0005/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0005/stylization/flatten.mp4",
                method4: "VEditBench-Short/scenery_0005/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0005/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0005/stylization/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0005/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0005/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.4518,
                    metric_2: 0.1549,
                    metric_3: 0.9815,
                    metric_4: 0.6634,
                    metric_5: 0.5709,
                    metric_6: 0.523,
                    metric_7: 0.5854,
                    metric_8: 0.9918
                },
                method2: {
                    metric_1: 23.6497,
                    metric_2: 0.1625,
                    metric_3: 0.995,
                    metric_4: 0.7611,
                    metric_5: 0.8245,
                    metric_6: 0.7144,
                    metric_7: 0.8721,
                    metric_8: 0.9833
                },
                method3: {
                    metric_1: 19.3883,
                    metric_2: 0.1356,
                    metric_3: 0.985,
                    metric_4: 0.5189,
                    metric_5: 0.4433,
                    metric_6: 0.4069,
                    metric_7: 0.7007,
                    metric_8: 0.9423
                },
                method4: {
                    metric_1: 22.2369,
                    metric_2: 0.1579,
                    metric_3: 0.9924,
                    metric_4: 0.7478,
                    metric_5: 0.7965,
                    metric_6: 0.6722,
                    metric_7: 0.8643,
                    metric_8: 0.9842
                },
                method5: {
                    metric_1: 22.2329,
                    metric_2: 0.1096,
                    metric_3: 0.988,
                    metric_4: 0.7872,
                    metric_5: 0.7122,
                    metric_6: 0.5737,
                    metric_7: 0.7661,
                    metric_8: 0.9875
                },
                method6: {
                    metric_1: 28.2988,
                    metric_2: 0.1882,
                    metric_3: 0.9797,
                    metric_4: 0.6767,
                    metric_5: 0.4306,
                    metric_6: 0.5456,
                    metric_7: 0.6123,
                    metric_8: 0.9759
                },
                method7: {
                    metric_1: 28.2387,
                    metric_2: 0.2434,
                    metric_3: 0.984,
                    metric_4: 0.5918,
                    metric_5: 0.3238,
                    metric_6: 0.2643,
                    metric_7: 0.4038,
                    metric_8: 0.986
                },
                method8: {
                    metric_1: 26.0929,
                    metric_2: 0.2148,
                    metric_3: 0.9909,
                    metric_4: 0.6283,
                    metric_5: 0.4766,
                    metric_6: 0.4335,
                    metric_7: 0.5327,
                    metric_8: 0.9893
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/scenery_0016/input.mp4",
    category: "Scenery",
    originalCaption: "The sky is cloudy and there are mountains covered in snow with trees in the foreground.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the clouds moving out of screen.",
            targetPrompt: "The sky is cloudy with clouds moving out of the screen, and there are mountains covered in snow with trees in the foreground.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0016/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0016/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0016/motion_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0016/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0016/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0016/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0016/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0016/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.6005,
                    metric_2: 0.2321,
                    metric_3: 0.9054,
                    metric_4: 0.323,
                    metric_5: 0.8095,
                    metric_6: 0.5312,
                    metric_7: 0.7949,
                    metric_8: 0.9869
                },
                method2: {
                    metric_1: 24.5492,
                    metric_2: 0.2397,
                    metric_3: 0.9295,
                    metric_4: 0.6848,
                    metric_5: 0.8315,
                    metric_6: 0.5311,
                    metric_7: 0.8291,
                    metric_8: 0.9898
                },
                method3: {
                    metric_1: 23.5669,
                    metric_2: 0.1831,
                    metric_3: 0.8976,
                    metric_4: 0.6044,
                    metric_5: 0.2102,
                    metric_6: 0.1429,
                    metric_7: 0.281,
                    metric_8: 0.9827
                },
                method4: {
                    metric_1: 23.2716,
                    metric_2: 0.2457,
                    metric_3: 0.9212,
                    metric_4: 0.7022,
                    metric_5: 0.953,
                    metric_6: 0.5302,
                    metric_7: 0.8931,
                    metric_8: 0.9884
                },
                method5: {
                    metric_1: 24.1912,
                    metric_2: 0.2515,
                    metric_3: 0.9247,
                    metric_4: 0.7975,
                    metric_5: 0.8123,
                    metric_6: 0.5109,
                    metric_7: 0.8086,
                    metric_8: 0.9861
                },
                method6: {
                    metric_1: 26.3845,
                    metric_2: 0.2475,
                    metric_3: 0.9126,
                    metric_4: 0.5756,
                    metric_5: 0.6361,
                    metric_6: 0.457,
                    metric_7: 0.5933,
                    metric_8: 0.9789
                },
                method7: {
                    metric_1: 25.2231,
                    metric_2: 0.248,
                    metric_3: 0.902,
                    metric_4: 0.3295,
                    metric_5: 0.4896,
                    metric_6: 0.2966,
                    metric_7: 0.5161,
                    metric_8: 0.9646
                },
                method8: {
                    metric_1: 25.4543,
                    metric_2: 0.2725,
                    metric_3: 0.9237,
                    metric_4: 0.4655,
                    metric_5: 0.6267,
                    metric_6: 0.3646,
                    metric_7: 0.6064,
                    metric_8: 0.9803
                }
            }
        },
        'object-change': {
            editPrompt: "Change the mountains to a desert landscape.",
            targetPrompt: "The sky is cloudy and there is a desert landscape with trees in the foreground.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0016/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0016/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0016/object_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0016/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0016/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0016/object_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0016/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0016/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 16.7297,
                    metric_2: 0.1063,
                    metric_3: 0.8948,
                    metric_4: 0.3285,
                    metric_5: 0.8319,
                    metric_6: 0.5186,
                    metric_7: 0.813,
                    metric_8: 0.9883
                },
                method2: {
                    metric_1: 25.6743,
                    metric_2: 0.2387,
                    metric_3: 0.9275,
                    metric_4: 0.586,
                    metric_5: 0.9583,
                    metric_6: 0.6423,
                    metric_7: 0.9097,
                    metric_8: 0.983
                },
                method3: {
                    metric_1: 24.3275,
                    metric_2: 0.2015,
                    metric_3: 0.8797,
                    metric_4: 0.4501,
                    metric_5: 0.6777,
                    metric_6: 0.697,
                    metric_7: 0.7778,
                    metric_8: 0.9828
                },
                method4: {
                    metric_1: 25.0957,
                    metric_2: 0.2255,
                    metric_3: 0.8975,
                    metric_4: 0.5567,
                    metric_5: 0.9885,
                    metric_6: 0.6847,
                    metric_7: 0.9463,
                    metric_8: 0.9816
                },
                method5: {
                    metric_1: 19.0048,
                    metric_2: 0.1712,
                    metric_3: 0.9202,
                    metric_4: 0.6618,
                    metric_5: 0.6631,
                    metric_6: 0.4145,
                    metric_7: 0.7021,
                    metric_8: 0.9888
                },
                method6: {
                    metric_1: 30.1987,
                    metric_2: 0.299,
                    metric_3: 0.8955,
                    metric_4: 0.4907,
                    metric_5: 0.7877,
                    metric_6: 0.432,
                    metric_7: 0.8384,
                    metric_8: 0.9838
                },
                method7: {
                    metric_1: 30.1571,
                    metric_2: 0.2283,
                    metric_3: 0.8659,
                    metric_4: 0.3319,
                    metric_5: 0.7392,
                    metric_6: 0.5855,
                    metric_7: 0.6943,
                    metric_8: 0.9611
                },
                method8: {
                    metric_1: 28.7377,
                    metric_2: 0.2663,
                    metric_3: 0.9207,
                    metric_4: 0.4363,
                    metric_5: 0.5498,
                    metric_6: 0.2163,
                    metric_7: 0.5674,
                    metric_8: 0.9837
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a eagle flying by.",
            targetPrompt: "The sky is cloudy and there are mountains covered in snow with trees in the foreground, and an eagle is flying by.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0016/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0016/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0016/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/scenery_0016/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0016/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0016/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0016/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0016/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.2723,
                    metric_2: 0.2601,
                    metric_3: 0.8969,
                    metric_4: 0.3212,
                    metric_5: 0.8559,
                    metric_6: 0.5208,
                    metric_7: 0.8174,
                    metric_8: 0.9878
                },
                method2: {
                    metric_1: 22.0759,
                    metric_2: 0.2163,
                    metric_3: 0.9268,
                    metric_4: 0.6607,
                    metric_5: 0.9739,
                    metric_6: 0.7996,
                    metric_7: 0.9473,
                    metric_8: 0.9894
                },
                method3: {
                    metric_1: 23.9966,
                    metric_2: 0.2447,
                    metric_3: 0.8912,
                    metric_4: 0.6002,
                    metric_5: 0.7028,
                    metric_6: 0.4974,
                    metric_7: 0.7021,
                    metric_8: 0.983
                },
                method4: {
                    metric_1: 21.7694,
                    metric_2: 0.2147,
                    metric_3: 0.9126,
                    metric_4: 0.6527,
                    metric_5: 0.9493,
                    metric_6: 0.5298,
                    metric_7: 0.8853,
                    metric_8: 0.9888
                },
                method5: {
                    metric_1: 22.4501,
                    metric_2: 0.2654,
                    metric_3: 0.9299,
                    metric_4: 0.7838,
                    metric_5: 0.7465,
                    metric_6: 0.4906,
                    metric_7: 0.7485,
                    metric_8: 0.9875
                },
                method6: {
                    metric_1: 23.8675,
                    metric_2: 0.2417,
                    metric_3: 0.858,
                    metric_4: 0.5471,
                    metric_5: 0.8331,
                    metric_6: 0.4999,
                    metric_7: 0.7979,
                    metric_8: 0.9834
                },
                method7: {
                    metric_1: 25.2051,
                    metric_2: 0.2178,
                    metric_3: 0.8889,
                    metric_4: 0.3619,
                    metric_5: 0.2766,
                    metric_6: 0.1576,
                    metric_7: 0.312,
                    metric_8: 0.9776
                },
                method8: {
                    metric_1: 23.4744,
                    metric_2: 0.2328,
                    metric_3: 0.9178,
                    metric_4: 0.4544,
                    metric_5: 0.6157,
                    metric_6: 0.3813,
                    metric_7: 0.6055,
                    metric_8: 0.9797
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the trees from the foreground.",
            targetPrompt: "The sky is cloudy and there are mountains covered in snow.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0016/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0016/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0016/object_removal/flatten.mp4",
                method4: "VEditBench-Short/scenery_0016/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0016/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0016/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0016/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0016/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 19.7316,
                    metric_2: 0.2281,
                    metric_3: 0.9084,
                    metric_4: 0.3401,
                    metric_5: 0.8788,
                    metric_6: 0.5101,
                    metric_7: 0.853,
                    metric_8: 0.9895
                },
                method2: {
                    metric_1: 19.7031,
                    metric_2: 0.2403,
                    metric_3: 0.9243,
                    metric_4: 0.6252,
                    metric_5: 0.8209,
                    metric_6: 0.5519,
                    metric_7: 0.8247,
                    metric_8: 0.9897
                },
                method3: {
                    metric_1: 21.9365,
                    metric_2: 0.217,
                    metric_3: 0.9003,
                    metric_4: 0.5597,
                    metric_5: 0.3795,
                    metric_6: 0.2887,
                    metric_7: 0.467,
                    metric_8: 0.9817
                },
                method4: {
                    metric_1: 19.7764,
                    metric_2: 0.234,
                    metric_3: 0.9075,
                    metric_4: 0.642,
                    metric_5: 0.8776,
                    metric_6: 0.5691,
                    metric_7: 0.8374,
                    metric_8: 0.9891
                },
                method5: {
                    metric_1: 18.4588,
                    metric_2: 0.224,
                    metric_3: 0.9277,
                    metric_4: 0.7789,
                    metric_5: 0.8359,
                    metric_6: 0.5218,
                    metric_7: 0.8154,
                    metric_8: 0.9861
                },
                method6: {
                    metric_1: 22.3642,
                    metric_2: 0.2552,
                    metric_3: 0.9013,
                    metric_4: 0.5468,
                    metric_5: 0.7405,
                    metric_6: 0.4809,
                    metric_7: 0.7573,
                    metric_8: 0.9837
                },
                method7: {
                    metric_1: 21.4335,
                    metric_2: 0.1846,
                    metric_3: 0.8572,
                    metric_4: 0.414,
                    metric_5: 0.3815,
                    metric_6: 0.2336,
                    metric_7: 0.4004,
                    metric_8: 0.975
                },
                method8: {
                    metric_1: 19.0653,
                    metric_2: 0.2211,
                    metric_3: 0.9228,
                    metric_4: 0.4728,
                    metric_5: 0.7147,
                    metric_6: 0.4165,
                    metric_7: 0.7051,
                    metric_8: 0.9804
                }
            }
        },
        'scene-change': {
            editPrompt: "Make the setting a sunny seaside.",
            targetPrompt: "A sunny seaside with clear skies, sandy shores, and palm trees in the foreground.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0016/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0016/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0016/scene_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0016/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0016/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0016/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0016/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0016/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 11.544,
                    metric_2: 0.0188,
                    metric_3: 0.9027,
                    metric_4: 0.3475,
                    metric_5: 0.8927,
                    metric_6: 0.5079,
                    metric_7: 0.8311,
                    metric_8: 0.9882
                },
                method2: {
                    metric_1: 22.5324,
                    metric_2: 0.2299,
                    metric_3: 0.932,
                    metric_4: 0.4996,
                    metric_5: 0.9929,
                    metric_6: 0.6472,
                    metric_7: 0.9199,
                    metric_8: 0.9829
                },
                method3: {
                    metric_1: 26.1073,
                    metric_2: 0.2375,
                    metric_3: 0.8804,
                    metric_4: 0.3589,
                    metric_5: 0.4775,
                    metric_6: 0.5198,
                    metric_7: 0.5439,
                    metric_8: 0.9682
                },
                method4: {
                    metric_1: 23.1258,
                    metric_2: 0.2114,
                    metric_3: 0.9091,
                    metric_4: 0.4923,
                    metric_5: 0.9957,
                    metric_6: 0.6273,
                    metric_7: 0.9741,
                    metric_8: 0.9849
                },
                method5: {
                    metric_1: 11.439,
                    metric_2: 0.0386,
                    metric_3: 0.918,
                    metric_4: 0.7283,
                    metric_5: 0.7941,
                    metric_6: 0.5042,
                    metric_7: 0.7749,
                    metric_8: 0.9856
                },
                method6: {
                    metric_1: 21.9142,
                    metric_2: 0.2506,
                    metric_3: 0.8503,
                    metric_4: 0.4866,
                    metric_5: 0.864,
                    metric_6: 0.4851,
                    metric_7: 0.8262,
                    metric_8: 0.9856
                },
                method7: {
                    metric_1: 25.4002,
                    metric_2: 0.2506,
                    metric_3: 0.7397,
                    metric_4: 0.2924,
                    metric_5: 0.8304,
                    metric_6: 0.708,
                    metric_7: 0.8096,
                    metric_8: 0.8773
                },
                method8: {
                    metric_1: 23.0638,
                    metric_2: 0.2405,
                    metric_3: 0.9018,
                    metric_4: 0.4207,
                    metric_5: 0.6952,
                    metric_6: 0.2584,
                    metric_7: 0.707,
                    metric_8: 0.9862
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Noir style",
            targetPrompt: "The sky is cloudy and there are mountains covered in snow with trees in the foreground, depicted in a Noir style",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0016/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0016/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0016/stylization/flatten.mp4",
                method4: "VEditBench-Short/scenery_0016/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0016/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0016/stylization/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0016/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0016/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 19.4757,
                    metric_2: 0.2016,
                    metric_3: 0.9003,
                    metric_4: 0.3071,
                    metric_5: 0.8865,
                    metric_6: 0.5676,
                    metric_7: 0.8413,
                    metric_8: 0.9873
                },
                method2: {
                    metric_1: 21.3423,
                    metric_2: 0.2191,
                    metric_3: 0.9297,
                    metric_4: 0.6768,
                    metric_5: 0.8308,
                    metric_6: 0.5724,
                    metric_7: 0.8589,
                    metric_8: 0.9885
                },
                method3: {
                    metric_1: 23.257,
                    metric_2: 0.2264,
                    metric_3: 0.8985,
                    metric_4: 0.3145,
                    metric_5: 0.2505,
                    metric_6: 0.2384,
                    metric_7: 0.3096,
                    metric_8: 0.9573
                },
                method4: {
                    metric_1: 23.2769,
                    metric_2: 0.2425,
                    metric_3: 0.9164,
                    metric_4: 0.6691,
                    metric_5: 0.8137,
                    metric_6: 0.5553,
                    metric_7: 0.8311,
                    metric_8: 0.9871
                },
                method5: {
                    metric_1: 25.0103,
                    metric_2: 0.2548,
                    metric_3: 0.898,
                    metric_4: 0.5955,
                    metric_5: 0.6378,
                    metric_6: 0.5187,
                    metric_7: 0.7085,
                    metric_8: 0.9856
                },
                method6: {
                    metric_1: 27.2762,
                    metric_2: 0.2604,
                    metric_3: 0.8729,
                    metric_4: 0.454,
                    metric_5: 0.4054,
                    metric_6: 0.3717,
                    metric_7: 0.5391,
                    metric_8: 0.9736
                },
                method7: {
                    metric_1: 26.2761,
                    metric_2: 0.2272,
                    metric_3: 0.8961,
                    metric_4: 0.3381,
                    metric_5: 0.3165,
                    metric_6: 0.2149,
                    metric_7: 0.3608,
                    metric_8: 0.9755
                },
                method8: {
                    metric_1: 29.0447,
                    metric_2: 0.2796,
                    metric_3: 0.9044,
                    metric_4: 0.4192,
                    metric_5: 0.4912,
                    metric_6: 0.3062,
                    metric_7: 0.5078,
                    metric_8: 0.9822
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/scenery_0023/input.mp4",
    category: "Scenery",
    originalCaption: "A person holding a camera is standing on a rocky terrain with a lake surrounded by mountains.",
    editTypes: {
        'motion-change': {
            editPrompt: "Pan the camera from right to left.",
            targetPrompt: "The camera panning from right to left: a person standing on a rocky terrain with a lake surrounded by mountains is holding a camera.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0023/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0023/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0023/motion_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0023/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0023/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0023/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0023/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0023/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.7158,
                    metric_2: 0.2348,
                    metric_3: 0.8948,
                    metric_4: 0.4337,
                    metric_5: 0.8183,
                    metric_6: 0.7303,
                    metric_7: 0.8281,
                    metric_8: 0.9913
                },
                method2: {
                    metric_1: 23.4814,
                    metric_2: 0.233,
                    metric_3: 0.8929,
                    metric_4: 0.7061,
                    metric_5: 0.8299,
                    metric_6: 0.5618,
                    metric_7: 0.8604,
                    metric_8: 0.9925
                },
                method3: {
                    metric_1: 23.8518,
                    metric_2: 0.1906,
                    metric_3: 0.8357,
                    metric_4: 0.6467,
                    metric_5: 0.0702,
                    metric_6: 0.1929,
                    metric_7: 0.1704,
                    metric_8: 0.995
                },
                method4: {
                    metric_1: 21.6762,
                    metric_2: 0.227,
                    metric_3: 0.8976,
                    metric_4: 0.7166,
                    metric_5: 0.9175,
                    metric_6: 0.6593,
                    metric_7: 0.8989,
                    metric_8: 0.9932
                },
                method5: {
                    metric_1: 25.3214,
                    metric_2: 0.2748,
                    metric_3: 0.9141,
                    metric_4: 0.7324,
                    metric_5: 0.8323,
                    metric_6: 0.6745,
                    metric_7: 0.853,
                    metric_8: 0.9937
                },
                method6: {
                    metric_1: 24.4054,
                    metric_2: 0.2634,
                    metric_3: 0.8684,
                    metric_4: 0.6384,
                    metric_5: 0.8152,
                    metric_6: 0.6822,
                    metric_7: 0.8037,
                    metric_8: 0.9882
                },
                method7: {
                    metric_1: 24.314,
                    metric_2: 0.2331,
                    metric_3: 0.8792,
                    metric_4: 0.2885,
                    metric_5: 0.2448,
                    metric_6: 0.2003,
                    metric_7: 0.2795,
                    metric_8: 0.9835
                },
                method8: {
                    metric_1: 28.023,
                    metric_2: 0.281,
                    metric_3: 0.9058,
                    metric_4: 0.4904,
                    metric_5: 0.6786,
                    metric_6: 0.4645,
                    metric_7: 0.6553,
                    metric_8: 0.9946
                }
            }
        },
        'object-change': {
            editPrompt: "Change the person to a bear.",
            targetPrompt: "A bear holding a camera is standing on a rocky terrain with a lake surrounded by mountains.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0023/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0023/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0023/object_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0023/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0023/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0023/object_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0023/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0023/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.8119,
                    metric_2: 0.2743,
                    metric_3: 0.8949,
                    metric_4: 0.4323,
                    metric_5: 0.8004,
                    metric_6: 0.6858,
                    metric_7: 0.7827,
                    metric_8: 0.9917
                },
                method2: {
                    metric_1: 26.8068,
                    metric_2: 0.2992,
                    metric_3: 0.8922,
                    metric_4: 0.6435,
                    metric_5: 0.8843,
                    metric_6: 0.6259,
                    metric_7: 0.855,
                    metric_8: 0.9917
                },
                method3: {
                    metric_1: 28.8263,
                    metric_2: 0.3097,
                    metric_3: 0.8857,
                    metric_4: 0.6907,
                    metric_5: 0.8393,
                    metric_6: 0.7532,
                    metric_7: 0.8589,
                    metric_8: 0.9936
                },
                method4: {
                    metric_1: 22.4504,
                    metric_2: 0.2676,
                    metric_3: 0.8878,
                    metric_4: 0.6539,
                    metric_5: 0.9802,
                    metric_6: 0.6237,
                    metric_7: 0.9526,
                    metric_8: 0.9899
                },
                method5: {
                    metric_1: 27.4804,
                    metric_2: 0.3278,
                    metric_3: 0.9088,
                    metric_4: 0.7591,
                    metric_5: 0.9091,
                    metric_6: 0.7978,
                    metric_7: 0.916,
                    metric_8: 0.9934
                },
                method6: {
                    metric_1: 30.5076,
                    metric_2: 0.3166,
                    metric_3: 0.8606,
                    metric_4: 0.626,
                    metric_5: 0.9551,
                    metric_6: 0.8147,
                    metric_7: 0.9541,
                    metric_8: 0.9849
                },
                method7: {
                    metric_1: 25.4918,
                    metric_2: 0.2434,
                    metric_3: 0.8917,
                    metric_4: 0.2639,
                    metric_5: 0.2289,
                    metric_6: 0.1876,
                    metric_7: 0.2832,
                    metric_8: 0.9882
                },
                method8: {
                    metric_1: 26.1992,
                    metric_2: 0.2773,
                    metric_3: 0.9057,
                    metric_4: 0.4601,
                    metric_5: 0.623,
                    metric_6: 0.4823,
                    metric_7: 0.6011,
                    metric_8: 0.9962
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a backpack to the person.",
            targetPrompt: "A person wearing a backpack is holding a camera is standing on a rocky terrain with a lake surrounded by mountains",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0023/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0023/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0023/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/scenery_0023/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0023/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0023/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0023/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0023/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.5419,
                    metric_2: 0.263,
                    metric_3: 0.9035,
                    metric_4: 0.4149,
                    metric_5: 0.854,
                    metric_6: 0.7286,
                    metric_7: 0.8428,
                    metric_8: 0.9879
                },
                method2: {
                    metric_1: 25.2601,
                    metric_2: 0.2798,
                    metric_3: 0.8949,
                    metric_4: 0.688,
                    metric_5: 0.9815,
                    metric_6: 0.716,
                    metric_7: 0.9546,
                    metric_8: 0.9919
                },
                method3: {
                    metric_1: 21.7454,
                    metric_2: 0.2499,
                    metric_3: 0.902,
                    metric_4: 0.795,
                    metric_5: 0.632,
                    metric_6: 0.5158,
                    metric_7: 0.6484,
                    metric_8: 0.9946
                },
                method4: {
                    metric_1: 25.1106,
                    metric_2: 0.2868,
                    metric_3: 0.9001,
                    metric_4: 0.6872,
                    metric_5: 0.9768,
                    metric_6: 0.7254,
                    metric_7: 0.9541,
                    metric_8: 0.9927
                },
                method5: {
                    metric_1: 20.767,
                    metric_2: 0.258,
                    metric_3: 0.9054,
                    metric_4: 0.7643,
                    metric_5: 0.8593,
                    metric_6: 0.65,
                    metric_7: 0.8535,
                    metric_8: 0.9937
                },
                method6: {
                    metric_1: 26.529,
                    metric_2: 0.2912,
                    metric_3: 0.8757,
                    metric_4: 0.6099,
                    metric_5: 0.8483,
                    metric_6: 0.6991,
                    metric_7: 0.9043,
                    metric_8: 0.9872
                },
                method7: {
                    metric_1: 24.987,
                    metric_2: 0.2488,
                    metric_3: 0.8863,
                    metric_4: 0.2834,
                    metric_5: 0.1908,
                    metric_6: 0.1222,
                    metric_7: 0.2499,
                    metric_8: 0.9832
                },
                method8: {
                    metric_1: 26.7906,
                    metric_2: 0.2926,
                    metric_3: 0.9058,
                    metric_4: 0.4527,
                    metric_5: 0.7228,
                    metric_6: 0.4715,
                    metric_7: 0.7212,
                    metric_8: 0.9947
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the camera from his hand.",
            targetPrompt: "A person is standing on a rocky terrain with a lake surrounded by mountains.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0023/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0023/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0023/object_removal/flatten.mp4",
                method4: "VEditBench-Short/scenery_0023/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0023/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0023/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0023/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0023/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 20.1399,
                    metric_2: 0.2332,
                    metric_3: 0.8938,
                    metric_4: 0.3889,
                    metric_5: 0.8687,
                    metric_6: 0.7627,
                    metric_7: 0.8647,
                    metric_8: 0.9846
                },
                method2: {
                    metric_1: 22.8728,
                    metric_2: 0.2371,
                    metric_3: 0.8808,
                    metric_4: 0.6582,
                    metric_5: 0.9837,
                    metric_6: 0.6706,
                    metric_7: 0.9453,
                    metric_8: 0.992
                },
                method3: {
                    metric_1: 24.3001,
                    metric_2: 0.2352,
                    metric_3: 0.8902,
                    metric_4: 0.767,
                    metric_5: 0.7723,
                    metric_6: 0.5528,
                    metric_7: 0.7866,
                    metric_8: 0.9954
                },
                method4: {
                    metric_1: 22.3241,
                    metric_2: 0.2593,
                    metric_3: 0.8925,
                    metric_4: 0.6899,
                    metric_5: 0.9813,
                    metric_6: 0.6897,
                    metric_7: 0.9712,
                    metric_8: 0.9925
                },
                method5: {
                    metric_1: 23.068,
                    metric_2: 0.2505,
                    metric_3: 0.9111,
                    metric_4: 0.7175,
                    metric_5: 0.8357,
                    metric_6: 0.709,
                    metric_7: 0.856,
                    metric_8: 0.9927
                },
                method6: {
                    metric_1: 23.2392,
                    metric_2: 0.2334,
                    metric_3: 0.871,
                    metric_4: 0.6403,
                    metric_5: 0.846,
                    metric_6: 0.7377,
                    metric_7: 0.8999,
                    metric_8: 0.988
                },
                method7: {
                    metric_1: 23.9173,
                    metric_2: 0.243,
                    metric_3: 0.8873,
                    metric_4: 0.2817,
                    metric_5: 0.2331,
                    metric_6: 0.215,
                    metric_7: 0.2578,
                    metric_8: 0.986
                },
                method8: {
                    metric_1: 21.9845,
                    metric_2: 0.2545,
                    metric_3: 0.8942,
                    metric_4: 0.4475,
                    metric_5: 0.5506,
                    metric_6: 0.3117,
                    metric_7: 0.5166,
                    metric_8: 0.9963
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it during a snowy winter.",
            targetPrompt: "A person holding a camera is standing on a rocky terrain covered in snow, with a lake surrounded by snow-capped mountains during a snowy winter.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0023/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0023/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0023/scene_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0023/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0023/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0023/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0023/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0023/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.2637,
                    metric_2: 0.2748,
                    metric_3: 0.8729,
                    metric_4: 0.3716,
                    metric_5: 0.8292,
                    metric_6: 0.7241,
                    metric_7: 0.8159,
                    metric_8: 0.9864
                },
                method2: {
                    metric_1: 26.7136,
                    metric_2: 0.2841,
                    metric_3: 0.877,
                    metric_4: 0.61,
                    metric_5: 0.9855,
                    metric_6: 0.6928,
                    metric_7: 0.9702,
                    metric_8: 0.9899
                },
                method3: {
                    metric_1: 25.87,
                    metric_2: 0.2534,
                    metric_3: 0.8818,
                    metric_4: 0.6181,
                    metric_5: 0.7509,
                    metric_6: 0.4957,
                    metric_7: 0.7681,
                    metric_8: 0.9807
                },
                method4: {
                    metric_1: 24.7071,
                    metric_2: 0.2764,
                    metric_3: 0.8967,
                    metric_4: 0.646,
                    metric_5: 0.9778,
                    metric_6: 0.6839,
                    metric_7: 0.957,
                    metric_8: 0.992
                },
                method5: {
                    metric_1: 22.4174,
                    metric_2: 0.2612,
                    metric_3: 0.9079,
                    metric_4: 0.6136,
                    metric_5: 0.7928,
                    metric_6: 0.6522,
                    metric_7: 0.8403,
                    metric_8: 0.9929
                },
                method6: {
                    metric_1: 25.7496,
                    metric_2: 0.2543,
                    metric_3: 0.8599,
                    metric_4: 0.5562,
                    metric_5: 0.8817,
                    metric_6: 0.7273,
                    metric_7: 0.8564,
                    metric_8: 0.9831
                },
                method7: {
                    metric_1: 24.8778,
                    metric_2: 0.2143,
                    metric_3: 0.8936,
                    metric_4: 0.262,
                    metric_5: 0.1799,
                    metric_6: 0.1967,
                    metric_7: 0.2428,
                    metric_8: 0.984
                },
                method8: {
                    metric_1: 24.7456,
                    metric_2: 0.2834,
                    metric_3: 0.8614,
                    metric_4: 0.427,
                    metric_5: 0.5418,
                    metric_6: 0.2732,
                    metric_7: 0.5391,
                    metric_8: 0.9964
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Low Poly style",
            targetPrompt: "A person holding a camera is standing on a rocky terrain with a lake surrounded by mountains, depicted in a Low Poly style",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0023/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0023/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0023/stylization/flatten.mp4",
                method4: "VEditBench-Short/scenery_0023/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0023/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0023/stylization/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0023/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0023/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.3023,
                    metric_2: 0.2643,
                    metric_3: 0.9022,
                    metric_4: 0.4328,
                    metric_5: 0.797,
                    metric_6: 0.6938,
                    metric_7: 0.8223,
                    metric_8: 0.9927
                },
                method2: {
                    metric_1: 29.1108,
                    metric_2: 0.2213,
                    metric_3: 0.8584,
                    metric_4: 0.6235,
                    metric_5: 0.8969,
                    metric_6: 0.7905,
                    metric_7: 0.8818,
                    metric_8: 0.9948
                },
                method3: {
                    metric_1: 25.3914,
                    metric_2: 0.2449,
                    metric_3: 0.8598,
                    metric_4: 0.548,
                    metric_5: 0.6936,
                    metric_6: 0.7491,
                    metric_7: 0.7734,
                    metric_8: 0.9882
                },
                method4: {
                    metric_1: 19.1817,
                    metric_2: 0.1623,
                    metric_3: 0.9004,
                    metric_4: 0.6812,
                    metric_5: 0.94,
                    metric_6: 0.7306,
                    metric_7: 0.9136,
                    metric_8: 0.9951
                },
                method5: {
                    metric_1: 31.7339,
                    metric_2: 0.2542,
                    metric_3: 0.8812,
                    metric_4: 0.6903,
                    metric_5: 0.394,
                    metric_6: 0.6682,
                    metric_7: 0.6621,
                    metric_8: 0.9951
                },
                method6: {
                    metric_1: 30.7071,
                    metric_2: 0.3147,
                    metric_3: 0.8556,
                    metric_4: 0.5516,
                    metric_5: 0.7506,
                    metric_6: 0.6908,
                    metric_7: 0.7563,
                    metric_8: 0.9817
                },
                method7: {
                    metric_1: 30.6144,
                    metric_2: 0.1853,
                    metric_3: 0.8819,
                    metric_4: 0.4173,
                    metric_5: 0.3722,
                    metric_6: 0.3791,
                    metric_7: 0.4407,
                    metric_8: 0.9949
                },
                method8: {
                    metric_1: 24.0362,
                    metric_2: 0.2458,
                    metric_3: 0.845,
                    metric_4: 0.474,
                    metric_5: 0.5692,
                    metric_6: 0.4669,
                    metric_7: 0.5649,
                    metric_8: 0.9963
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/scenery_0038/input.mp4",
    category: "Scenery",
    originalCaption: "A static shot of red roses in sunlight, gently swaying in the breeze.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the roses motionless.",
            targetPrompt: "A static shot of red roses in sunlight, standing motionless.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0038/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0038/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0038/motion_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0038/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0038/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0038/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0038/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0038/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.7887,
                    metric_2: 0.2357,
                    metric_3: 0.8791,
                    metric_4: 0.1507,
                    metric_5: 0.7701,
                    metric_6: 0.3008,
                    metric_7: 0.7954,
                    metric_8: 0.9883
                },
                method2: {
                    metric_1: 25.7118,
                    metric_2: 0.2382,
                    metric_3: 0.9072,
                    metric_4: 0.7172,
                    metric_5: 0.6843,
                    metric_6: 0.327,
                    metric_7: 0.7534,
                    metric_8: 0.9904
                },
                method3: {
                    metric_1: 25.7248,
                    metric_2: 0.2392,
                    metric_3: 0.9133,
                    metric_4: 0.7054,
                    metric_5: 0.7303,
                    metric_6: 0.4577,
                    metric_7: 0.7915,
                    metric_8: 0.9898
                },
                method4: {
                    metric_1: 25.7099,
                    metric_2: 0.2391,
                    metric_3: 0.9098,
                    metric_4: 0.7446,
                    metric_5: 0.4973,
                    metric_6: 0.2115,
                    metric_7: 0.5991,
                    metric_8: 0.9908
                },
                method5: {
                    metric_1: 26.6919,
                    metric_2: 0.2423,
                    metric_3: 0.9244,
                    metric_4: 0.8179,
                    metric_5: 0.7283,
                    metric_6: 0.2962,
                    metric_7: 0.7417,
                    metric_8: 0.9875
                },
                method6: {
                    metric_1: 24.5769,
                    metric_2: 0.2451,
                    metric_3: 0.9022,
                    metric_4: 0.6291,
                    metric_5: 0.5179,
                    metric_6: 0.2494,
                    metric_7: 0.585,
                    metric_8: 0.9792
                },
                method7: {
                    metric_1: 26.2547,
                    metric_2: 0.2485,
                    metric_3: 0.8573,
                    metric_4: 0.2977,
                    metric_5: 0.2743,
                    metric_6: 0.2451,
                    metric_7: 0.3423,
                    metric_8: 0.9813
                },
                method8: {
                    metric_1: 27.6244,
                    metric_2: 0.2809,
                    metric_3: 0.8741,
                    metric_4: 0.4562,
                    metric_5: 0.6864,
                    metric_6: 0.2782,
                    metric_7: 0.7222,
                    metric_8: 0.9778
                }
            }
        },
        'object-change': {
            editPrompt: "Change the red roses to tulips.",
            targetPrompt: "A static shot of tulips in sunlight, gently swaying in the breeze.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0038/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0038/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0038/object_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0038/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0038/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0038/object_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0038/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0038/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.7572,
                    metric_2: 0.256,
                    metric_3: 0.8686,
                    metric_4: 0.2703,
                    metric_5: 0.8302,
                    metric_6: 0.4932,
                    metric_7: 0.8511,
                    metric_8: 0.9896
                },
                method2: {
                    metric_1: 23.2942,
                    metric_2: 0.2325,
                    metric_3: 0.9063,
                    metric_4: 0.6377,
                    metric_5: 0.8117,
                    metric_6: 0.5137,
                    metric_7: 0.8306,
                    metric_8: 0.9891
                },
                method3: {
                    metric_1: 25.1973,
                    metric_2: 0.2384,
                    metric_3: 0.9045,
                    metric_4: 0.4653,
                    metric_5: 0.7482,
                    metric_6: 0.4531,
                    metric_7: 0.8062,
                    metric_8: 0.9808
                },
                method4: {
                    metric_1: 22.8856,
                    metric_2: 0.2279,
                    metric_3: 0.9003,
                    metric_4: 0.6012,
                    metric_5: 0.7544,
                    metric_6: 0.4405,
                    metric_7: 0.7969,
                    metric_8: 0.9888
                },
                method5: {
                    metric_1: 23.516,
                    metric_2: 0.206,
                    metric_3: 0.9135,
                    metric_4: 0.5877,
                    metric_5: 0.7743,
                    metric_6: 0.4828,
                    metric_7: 0.8086,
                    metric_8: 0.9895
                },
                method6: {
                    metric_1: 24.5594,
                    metric_2: 0.2396,
                    metric_3: 0.9014,
                    metric_4: 0.5448,
                    metric_5: 0.5591,
                    metric_6: 0.3297,
                    metric_7: 0.6348,
                    metric_8: 0.9774
                },
                method7: {
                    metric_1: 24.7733,
                    metric_2: 0.2236,
                    metric_3: 0.8909,
                    metric_4: 0.3066,
                    metric_5: 0.1866,
                    metric_6: 0.292,
                    metric_7: 0.2494,
                    metric_8: 0.9653
                },
                method8: {
                    metric_1: 26.2421,
                    metric_2: 0.2638,
                    metric_3: 0.8751,
                    metric_4: 0.3261,
                    metric_5: 0.7654,
                    metric_6: 0.4434,
                    metric_7: 0.7544,
                    metric_8: 0.992
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a yellow butterfly resting on one of the roses.",
            targetPrompt: "A static shot of red roses in sunlight, gently swaying in the breeze, with a yellow butterfly resting on one of the roses.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0038/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0038/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0038/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/scenery_0038/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0038/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0038/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0038/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0038/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.8437,
                    metric_2: 0.2391,
                    metric_3: 0.8625,
                    metric_4: 0.1983,
                    metric_5: 0.8417,
                    metric_6: 0.3223,
                    metric_7: 0.8701,
                    metric_8: 0.9876
                },
                method2: {
                    metric_1: 23.2568,
                    metric_2: 0.174,
                    metric_3: 0.9108,
                    metric_4: 0.734,
                    metric_5: 0.647,
                    metric_6: 0.2755,
                    metric_7: 0.7285,
                    metric_8: 0.9898
                },
                method3: {
                    metric_1: 23.0911,
                    metric_2: 0.2049,
                    metric_3: 0.9013,
                    metric_4: 0.5248,
                    metric_5: 0.5556,
                    metric_6: 0.4567,
                    metric_7: 0.7192,
                    metric_8: 0.9867
                },
                method4: {
                    metric_1: 23.5505,
                    metric_2: 0.1801,
                    metric_3: 0.9225,
                    metric_4: 0.6958,
                    metric_5: 0.5076,
                    metric_6: 0.2178,
                    metric_7: 0.6245,
                    metric_8: 0.9896
                },
                method5: {
                    metric_1: 24.1003,
                    metric_2: 0.1862,
                    metric_3: 0.9216,
                    metric_4: 0.746,
                    metric_5: 0.7336,
                    metric_6: 0.3229,
                    metric_7: 0.7578,
                    metric_8: 0.9861
                },
                method6: {
                    metric_1: 21.4079,
                    metric_2: 0.2,
                    metric_3: 0.9038,
                    metric_4: 0.6044,
                    metric_5: 0.3597,
                    metric_6: 0.1553,
                    metric_7: 0.4236,
                    metric_8: 0.9819
                },
                method7: {
                    metric_1: 22.1626,
                    metric_2: 0.1964,
                    metric_3: 0.8953,
                    metric_4: 0.3008,
                    metric_5: 0.2586,
                    metric_6: 0.2363,
                    metric_7: 0.3162,
                    metric_8: 0.9844
                },
                method8: {
                    metric_1: 24.1309,
                    metric_2: 0.1985,
                    metric_3: 0.8738,
                    metric_4: 0.4452,
                    metric_5: 0.6111,
                    metric_6: 0.2403,
                    metric_7: 0.6211,
                    metric_8: 0.9782
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the roses that are blurried in the background.",
            targetPrompt: "A static shot of red roses in sunlight, gently swaying in the breeze, with no other roses in the background.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0038/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0038/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0038/object_removal/flatten.mp4",
                method4: "VEditBench-Short/scenery_0038/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0038/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0038/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0038/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0038/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.0929,
                    metric_2: 0.2918,
                    metric_3: 0.8526,
                    metric_4: 0.2255,
                    metric_5: 0.8135,
                    metric_6: 0.2949,
                    metric_7: 0.8745,
                    metric_8: 0.987
                },
                method2: {
                    metric_1: 25.7848,
                    metric_2: 0.2509,
                    metric_3: 0.9049,
                    metric_4: 0.7419,
                    metric_5: 0.6647,
                    metric_6: 0.298,
                    metric_7: 0.7568,
                    metric_8: 0.9893
                },
                method3: {
                    metric_1: 27.3049,
                    metric_2: 0.2364,
                    metric_3: 0.9189,
                    metric_4: 0.8154,
                    metric_5: 0.7673,
                    metric_6: 0.4284,
                    metric_7: 0.8423,
                    metric_8: 0.9888
                },
                method4: {
                    metric_1: 25.9011,
                    metric_2: 0.2582,
                    metric_3: 0.9182,
                    metric_4: 0.7625,
                    metric_5: 0.5099,
                    metric_6: 0.2312,
                    metric_7: 0.6348,
                    metric_8: 0.9891
                },
                method5: {
                    metric_1: 27.3205,
                    metric_2: 0.2487,
                    metric_3: 0.9269,
                    metric_4: 0.8192,
                    metric_5: 0.5455,
                    metric_6: 0.2796,
                    metric_7: 0.5903,
                    metric_8: 0.9874
                },
                method6: {
                    metric_1: 23.8007,
                    metric_2: 0.2439,
                    metric_3: 0.9057,
                    metric_4: 0.6408,
                    metric_5: 0.4399,
                    metric_6: 0.2112,
                    metric_7: 0.4993,
                    metric_8: 0.982
                },
                method7: {
                    metric_1: 27.1674,
                    metric_2: 0.2409,
                    metric_3: 0.8705,
                    metric_4: 0.2606,
                    metric_5: 0.2437,
                    metric_6: 0.2275,
                    metric_7: 0.303,
                    metric_8: 0.9773
                },
                method8: {
                    metric_1: 27.2857,
                    metric_2: 0.2607,
                    metric_3: 0.876,
                    metric_4: 0.4566,
                    metric_5: 0.7437,
                    metric_6: 0.2918,
                    metric_7: 0.7651,
                    metric_8: 0.9767
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it an indoor setting with a window in the background.",
            targetPrompt: "A static shot of red roses gently swaying in the breeze in an indoor setting, with sunlight streaming through a window in the background.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0038/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0038/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0038/scene_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0038/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0038/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0038/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0038/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0038/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.5685,
                    metric_2: 0.2313,
                    metric_3: 0.8644,
                    metric_4: 0.2253,
                    metric_5: 0.7924,
                    metric_6: 0.3043,
                    metric_7: 0.8428,
                    metric_8: 0.9919
                },
                method2: {
                    metric_1: 25.6023,
                    metric_2: 0.2644,
                    metric_3: 0.9078,
                    metric_4: 0.6628,
                    metric_5: 0.5523,
                    metric_6: 0.3011,
                    metric_7: 0.6948,
                    metric_8: 0.9913
                },
                method3: {
                    metric_1: 26.9398,
                    metric_2: 0.2509,
                    metric_3: 0.9118,
                    metric_4: 0.5668,
                    metric_5: 0.7086,
                    metric_6: 0.3834,
                    metric_7: 0.7656,
                    metric_8: 0.9865
                },
                method4: {
                    metric_1: 21.7795,
                    metric_2: 0.2047,
                    metric_3: 0.9058,
                    metric_4: 0.7205,
                    metric_5: 0.4907,
                    metric_6: 0.2485,
                    metric_7: 0.605,
                    metric_8: 0.9909
                },
                method5: {
                    metric_1: 23.5952,
                    metric_2: 0.2331,
                    metric_3: 0.9202,
                    metric_4: 0.7685,
                    metric_5: 0.5286,
                    metric_6: 0.2893,
                    metric_7: 0.6094,
                    metric_8: 0.9884
                },
                method6: {
                    metric_1: 25.8231,
                    metric_2: 0.3087,
                    metric_3: 0.8898,
                    metric_4: 0.4966,
                    metric_5: 0.4032,
                    metric_6: 0.2437,
                    metric_7: 0.4961,
                    metric_8: 0.9854
                },
                method7: {
                    metric_1: 29.4724,
                    metric_2: 0.2702,
                    metric_3: 0.8998,
                    metric_4: 0.273,
                    metric_5: 0.3309,
                    metric_6: 0.27,
                    metric_7: 0.3909,
                    metric_8: 0.9851
                },
                method8: {
                    metric_1: 28.0759,
                    metric_2: 0.2999,
                    metric_3: 0.8774,
                    metric_4: 0.4052,
                    metric_5: 0.5104,
                    metric_6: 0.2352,
                    metric_7: 0.6089,
                    metric_8: 0.9864
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Letterism style",
            targetPrompt: "A static shot of red roses in sunlight, gently swaying in the breeze, depicted in a Letterism style",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0038/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0038/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0038/stylization/flatten.mp4",
                method4: "VEditBench-Short/scenery_0038/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0038/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0038/stylization/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0038/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0038/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.0273,
                    metric_2: 0.2386,
                    metric_3: 0.862,
                    metric_4: 0.2153,
                    metric_5: 0.8065,
                    metric_6: 0.3725,
                    metric_7: 0.8506,
                    metric_8: 0.9909
                },
                method2: {
                    metric_1: 24.949,
                    metric_2: 0.2172,
                    metric_3: 0.919,
                    metric_4: 0.7378,
                    metric_5: 0.5789,
                    metric_6: 0.2678,
                    metric_7: 0.7246,
                    metric_8: 0.9907
                },
                method3: {
                    metric_1: 23.9359,
                    metric_2: 0.178,
                    metric_3: 0.8919,
                    metric_4: 0.4994,
                    metric_5: 0.154,
                    metric_6: 0.3687,
                    metric_7: 0.3911,
                    metric_8: 0.9884
                },
                method4: {
                    metric_1: 24.9844,
                    metric_2: 0.2286,
                    metric_3: 0.9252,
                    metric_4: 0.7333,
                    metric_5: 0.472,
                    metric_6: 0.2004,
                    metric_7: 0.5527,
                    metric_8: 0.9903
                },
                method5: {
                    metric_1: 23.8852,
                    metric_2: 0.1978,
                    metric_3: 0.903,
                    metric_4: 0.6036,
                    metric_5: 0.3592,
                    metric_6: 0.2615,
                    metric_7: 0.3748,
                    metric_8: 0.9929
                },
                method6: {
                    metric_1: 25.4589,
                    metric_2: 0.236,
                    metric_3: 0.9007,
                    metric_4: 0.6304,
                    metric_5: 0.3261,
                    metric_6: 0.2308,
                    metric_7: 0.4346,
                    metric_8: 0.9825
                },
                method7: {
                    metric_1: 25.76,
                    metric_2: 0.21,
                    metric_3: 0.8858,
                    metric_4: 0.2736,
                    metric_5: 0.2429,
                    metric_6: 0.2852,
                    metric_7: 0.3079,
                    metric_8: 0.9884
                },
                method8: {
                    metric_1: 25.9703,
                    metric_2: 0.2622,
                    metric_3: 0.865,
                    metric_4: 0.4452,
                    metric_5: 0.6995,
                    metric_6: 0.4058,
                    metric_7: 0.7212,
                    metric_8: 0.9788
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/scenery_0047/input.mp4",
    category: "Scenery",
    originalCaption: "A small stream of water is running over rocks in a green forest with green trees.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make small stream of water in the green forest swirl gently around the rocks, as the trees start to sway more intensely with a rising wind.",
            targetPrompt: "The small stream of water in the green forest swirls gently around the rocks, as the trees start to sway more intensely with a rising wind.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0047/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0047/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0047/motion_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0047/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0047/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0047/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0047/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0047/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 19.8955,
                    metric_2: 0.1766,
                    metric_3: 0.901,
                    metric_4: 0.2354,
                    metric_5: 0.75,
                    metric_6: 0.4249,
                    metric_7: 0.8174,
                    metric_8: 0.9566
                },
                method2: {
                    metric_1: 25.5673,
                    metric_2: 0.249,
                    metric_3: 0.9255,
                    metric_4: 0.4095,
                    metric_5: 0.7524,
                    metric_6: 0.5171,
                    metric_7: 0.8511,
                    metric_8: 0.9413
                },
                method3: {
                    metric_1: 22.5491,
                    metric_2: 0.1956,
                    metric_3: 0.8904,
                    metric_4: 0.5436,
                    metric_5: 0.3589,
                    metric_6: 0.5905,
                    metric_7: 0.6431,
                    metric_8: 0.9735
                },
                method4: {
                    metric_1: 26.7345,
                    metric_2: 0.2529,
                    metric_3: 0.9562,
                    metric_4: 0.5077,
                    metric_5: 0.8514,
                    metric_6: 0.587,
                    metric_7: 0.8848,
                    metric_8: 0.9324
                },
                method5: {
                    metric_1: 23.3248,
                    metric_2: 0.2392,
                    metric_3: 0.9337,
                    metric_4: 0.7903,
                    metric_5: 0.6663,
                    metric_6: 0.4179,
                    metric_7: 0.7163,
                    metric_8: 0.9487
                },
                method6: {
                    metric_1: 25.6149,
                    metric_2: 0.254,
                    metric_3: 0.9097,
                    metric_4: 0.4674,
                    metric_5: 0.8174,
                    metric_6: 0.7294,
                    metric_7: 0.8901,
                    metric_8: 0.9497
                },
                method7: {
                    metric_1: 19.3316,
                    metric_2: 0.2043,
                    metric_3: 0.9296,
                    metric_4: 0.415,
                    metric_5: 0.1913,
                    metric_6: 0.0567,
                    metric_7: 0.2566,
                    metric_8: 0.9122
                },
                method8: {
                    metric_1: 19.6992,
                    metric_2: 0.2198,
                    metric_3: 0.9014,
                    metric_4: 0.3815,
                    metric_5: 0.708,
                    metric_6: 0.4372,
                    metric_7: 0.7231,
                    metric_8: 0.9091
                }
            }
        },
        'object-change': {
            editPrompt: "Change the stream to a waterfall.",
            targetPrompt: "A small waterfall is cascading over rocks in a green forest with green trees.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0047/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0047/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0047/object_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0047/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0047/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0047/object_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0047/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0047/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 17.97,
                    metric_2: 0.229,
                    metric_3: 0.8613,
                    metric_4: 0.197,
                    metric_5: 0.7498,
                    metric_6: 0.4263,
                    metric_7: 0.8008,
                    metric_8: 0.9679
                },
                method2: {
                    metric_1: 25.6171,
                    metric_2: 0.2871,
                    metric_3: 0.9393,
                    metric_4: 0.3939,
                    metric_5: 0.7683,
                    metric_6: 0.4955,
                    metric_7: 0.8467,
                    metric_8: 0.9302
                },
                method3: {
                    metric_1: 21.7681,
                    metric_2: 0.2501,
                    metric_3: 0.9495,
                    metric_4: 0.661,
                    metric_5: 0.6858,
                    metric_6: 0.5235,
                    metric_7: 0.7661,
                    metric_8: 0.9489
                },
                method4: {
                    metric_1: 25.1684,
                    metric_2: 0.2828,
                    metric_3: 0.938,
                    metric_4: 0.4851,
                    metric_5: 0.8418,
                    metric_6: 0.4746,
                    metric_7: 0.8657,
                    metric_8: 0.9249
                },
                method5: {
                    metric_1: 22.6684,
                    metric_2: 0.2448,
                    metric_3: 0.9622,
                    metric_4: 0.7449,
                    metric_5: 0.6966,
                    metric_6: 0.4614,
                    metric_7: 0.731,
                    metric_8: 0.9429
                },
                method6: {
                    metric_1: 24.8766,
                    metric_2: 0.2483,
                    metric_3: 0.9216,
                    metric_4: 0.4743,
                    metric_5: 0.7681,
                    metric_6: 0.6204,
                    metric_7: 0.8477,
                    metric_8: 0.9484
                },
                method7: {
                    metric_1: 22.4681,
                    metric_2: 0.2374,
                    metric_3: 0.9134,
                    metric_4: 0.4,
                    metric_5: 0.215,
                    metric_6: 0.0911,
                    metric_7: 0.2534,
                    metric_8: 0.9083
                },
                method8: {
                    metric_1: 19.6269,
                    metric_2: 0.2115,
                    metric_3: 0.9186,
                    metric_4: 0.3976,
                    metric_5: 0.6663,
                    metric_6: 0.364,
                    metric_7: 0.7017,
                    metric_8: 0.924
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a wooden bridge over the stream.",
            targetPrompt: "A small stream of water is running over rocks in a green forest with green trees, and a wooden bridge spans the stream.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0047/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0047/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0047/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/scenery_0047/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0047/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0047/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0047/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0047/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.8848,
                    metric_2: 0.1947,
                    metric_3: 0.8868,
                    metric_4: 0.2089,
                    metric_5: 0.6802,
                    metric_6: 0.2911,
                    metric_7: 0.7617,
                    metric_8: 0.9569
                },
                method2: {
                    metric_1: 26.0295,
                    metric_2: 0.2659,
                    metric_3: 0.9123,
                    metric_4: 0.3608,
                    metric_5: 0.7841,
                    metric_6: 0.4648,
                    metric_7: 0.8745,
                    metric_8: 0.9282
                },
                method3: {
                    metric_1: 19.6011,
                    metric_2: 0.1554,
                    metric_3: 0.889,
                    metric_4: 0.5345,
                    metric_5: 0.289,
                    metric_6: 0.3759,
                    metric_7: 0.4185,
                    metric_8: 0.9701
                },
                method4: {
                    metric_1: 24.0358,
                    metric_2: 0.2784,
                    metric_3: 0.9345,
                    metric_4: 0.4294,
                    metric_5: 0.8179,
                    metric_6: 0.4052,
                    metric_7: 0.8564,
                    metric_8: 0.9144
                },
                method5: {
                    metric_1: 28.4854,
                    metric_2: 0.2814,
                    metric_3: 0.8402,
                    metric_4: 0.4025,
                    metric_5: 0.7061,
                    metric_6: 0.6325,
                    metric_7: 0.7114,
                    metric_8: 0.9386
                },
                method6: {
                    metric_1: 23.5885,
                    metric_2: 0.261,
                    metric_3: 0.8987,
                    metric_4: 0.5543,
                    metric_5: 0.7557,
                    metric_6: 0.5218,
                    metric_7: 0.8496,
                    metric_8: 0.9457
                },
                method7: {
                    metric_1: 23.1389,
                    metric_2: 0.1873,
                    metric_3: 0.9324,
                    metric_4: 0.4173,
                    metric_5: 0.1719,
                    metric_6: 0.0467,
                    metric_7: 0.2317,
                    metric_8: 0.9112
                },
                method8: {
                    metric_1: 22.6298,
                    metric_2: 0.2183,
                    metric_3: 0.9195,
                    metric_4: 0.4266,
                    metric_5: 0.643,
                    metric_6: 0.3214,
                    metric_7: 0.6821,
                    metric_8: 0.9339
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the rocks.",
            targetPrompt: "A small stream of water is running in a green forest with green trees, but remove the rocks.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0047/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0047/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0047/object_removal/flatten.mp4",
                method4: "VEditBench-Short/scenery_0047/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0047/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0047/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0047/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0047/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.7024,
                    metric_2: 0.2016,
                    metric_3: 0.923,
                    metric_4: 0.2293,
                    metric_5: 0.7227,
                    metric_6: 0.36,
                    metric_7: 0.813,
                    metric_8: 0.9613
                },
                method2: {
                    metric_1: 28.9028,
                    metric_2: 0.2799,
                    metric_3: 0.9207,
                    metric_4: 0.3835,
                    metric_5: 0.7465,
                    metric_6: 0.4685,
                    metric_7: 0.8096,
                    metric_8: 0.9314
                },
                method3: {
                    metric_1: 25.511,
                    metric_2: 0.2314,
                    metric_3: 0.9564,
                    metric_4: 0.7813,
                    metric_5: 0.287,
                    metric_6: 0.0959,
                    metric_7: 0.4165,
                    metric_8: 0.9458
                },
                method4: {
                    metric_1: 28.489,
                    metric_2: 0.2757,
                    metric_3: 0.9356,
                    metric_4: 0.4827,
                    metric_5: 0.862,
                    metric_6: 0.4648,
                    metric_7: 0.8999,
                    metric_8: 0.9233
                },
                method5: {
                    metric_1: 25.7064,
                    metric_2: 0.2383,
                    metric_3: 0.9514,
                    metric_4: 0.7563,
                    metric_5: 0.6123,
                    metric_6: 0.3667,
                    metric_7: 0.689,
                    metric_8: 0.9432
                },
                method6: {
                    metric_1: 25.7451,
                    metric_2: 0.2596,
                    metric_3: 0.8952,
                    metric_4: 0.5323,
                    metric_5: 0.7448,
                    metric_6: 0.5322,
                    metric_7: 0.8291,
                    metric_8: 0.9432
                },
                method7: {
                    metric_1: 25.5291,
                    metric_2: 0.222,
                    metric_3: 0.8693,
                    metric_4: 0.4323,
                    metric_5: 0.299,
                    metric_6: 0.1505,
                    metric_7: 0.3411,
                    metric_8: 0.9173
                },
                method8: {
                    metric_1: 24.4778,
                    metric_2: 0.2217,
                    metric_3: 0.9215,
                    metric_4: 0.4027,
                    metric_5: 0.7005,
                    metric_6: 0.386,
                    metric_7: 0.7373,
                    metric_8: 0.9184
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a desert with cacti.",
            targetPrompt: "A small stream of water is running over rocks in a desert with cacti.",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0047/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0047/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0047/scene_change/flatten.mp4",
                method4: "VEditBench-Short/scenery_0047/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0047/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0047/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0047/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0047/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.9044,
                    metric_2: 0.2282,
                    metric_3: 0.912,
                    metric_4: 0.2285,
                    metric_5: 0.7272,
                    metric_6: 0.4071,
                    metric_7: 0.7646,
                    metric_8: 0.9502
                },
                method2: {
                    metric_1: 26.682,
                    metric_2: 0.3036,
                    metric_3: 0.9061,
                    metric_4: 0.4807,
                    metric_5: 0.7059,
                    metric_6: 0.2767,
                    metric_7: 0.8516,
                    metric_8: 0.9413
                },
                method3: {
                    metric_1: 18.933,
                    metric_2: 0.181,
                    metric_3: 0.9046,
                    metric_4: 0.4601,
                    metric_5: 0.3465,
                    metric_6: 0.1864,
                    metric_7: 0.4731,
                    metric_8: 0.9605
                },
                method4: {
                    metric_1: 25.7418,
                    metric_2: 0.2685,
                    metric_3: 0.9395,
                    metric_4: 0.5621,
                    metric_5: 0.7722,
                    metric_6: 0.3138,
                    metric_7: 0.8477,
                    metric_8: 0.9402
                },
                method5: {
                    metric_1: 25.8776,
                    metric_2: 0.2231,
                    metric_3: 0.8743,
                    metric_4: 0.4087,
                    metric_5: 0.58,
                    metric_6: 0.4771,
                    metric_7: 0.6206,
                    metric_8: 0.9234
                },
                method6: {
                    metric_1: 27.0213,
                    metric_2: 0.2922,
                    metric_3: 0.9298,
                    metric_4: 0.5966,
                    metric_5: 0.6565,
                    metric_6: 0.4212,
                    metric_7: 0.792,
                    metric_8: 0.9588
                },
                method7: {
                    metric_1: 23.475,
                    metric_2: 0.2352,
                    metric_3: 0.9123,
                    metric_4: 0.4273,
                    metric_5: 0.4693,
                    metric_6: 0.2821,
                    metric_7: 0.5029,
                    metric_8: 0.9082
                },
                method8: {
                    metric_1: 29.9677,
                    metric_2: 0.3134,
                    metric_3: 0.9306,
                    metric_4: 0.4028,
                    metric_5: 0.5987,
                    metric_6: 0.3351,
                    metric_7: 0.5742,
                    metric_8: 0.9312
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Paper Cut style",
            targetPrompt: "A small stream of water is running over rocks in a green forest with green trees, depicted in a Paper Cut style",
            resultVideos: {
                method1: "VEditBench-Short/scenery_0047/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/scenery_0047/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/scenery_0047/stylization/flatten.mp4",
                method4: "VEditBench-Short/scenery_0047/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/scenery_0047/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/scenery_0047/stylization/pix2video.mp4",
                method7: "VEditBench-Short/scenery_0047/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/scenery_0047/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 21.322,
                    metric_2: 0.1697,
                    metric_3: 0.9047,
                    metric_4: 0.2396,
                    metric_5: 0.6626,
                    metric_6: 0.4217,
                    metric_7: 0.7627,
                    metric_8: 0.9649
                },
                method2: {
                    metric_1: 25.9997,
                    metric_2: 0.1731,
                    metric_3: 0.9117,
                    metric_4: 0.5516,
                    metric_5: 0.4427,
                    metric_6: 0.39,
                    metric_7: 0.5645,
                    metric_8: 0.9562
                },
                method3: {
                    metric_1: 22.3542,
                    metric_2: 0.1726,
                    metric_3: 0.9158,
                    metric_4: 0.4506,
                    metric_5: 0.4984,
                    metric_6: 0.2726,
                    metric_7: 0.6782,
                    metric_8: 0.9666
                },
                method4: {
                    metric_1: 23.8506,
                    metric_2: 0.1968,
                    metric_3: 0.9537,
                    metric_4: 0.6463,
                    metric_5: 0.5544,
                    metric_6: 0.4644,
                    metric_7: 0.5493,
                    metric_8: 0.9412
                },
                method5: {
                    metric_1: 23.2999,
                    metric_2: 0.1688,
                    metric_3: 0.8415,
                    metric_4: 0.3353,
                    metric_5: 0.5857,
                    metric_6: 0.459,
                    metric_7: 0.6665,
                    metric_8: 0.9553
                },
                method6: {
                    metric_1: 25.8357,
                    metric_2: 0.2132,
                    metric_3: 0.8839,
                    metric_4: 0.4066,
                    metric_5: 0.6735,
                    metric_6: 0.4768,
                    metric_7: 0.7061,
                    metric_8: 0.9189
                },
                method7: {
                    metric_1: 23.5324,
                    metric_2: 0.2271,
                    metric_3: 0.8838,
                    metric_4: 0.3986,
                    metric_5: 0.2212,
                    metric_6: 0.1236,
                    metric_7: 0.2742,
                    metric_8: 0.915
                },
                method8: {
                    metric_1: 23.8282,
                    metric_2: 0.2268,
                    metric_3: 0.8872,
                    metric_4: 0.3794,
                    metric_5: 0.5746,
                    metric_6: 0.291,
                    metric_7: 0.6157,
                    metric_8: 0.9027
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/sport activity_0001/input.mp4",
    category: "Sport activity",
    originalCaption: "Players with different uniforms are playing a basketball match in basketball arena. Player number 13 from the blue team score a goal after dodge a block.",
    editTypes: {
        'motion-change': {
            editPrompt: "Zoom in the camera.",
            targetPrompt: "Players with different uniforms are playing a basketball match in a basketball arena, and as player number 13 from the blue team scores a goal after dodging a block, zoom in the camera.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0001/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0001/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0001/motion_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0001/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0001/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0001/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0001/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0001/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.3793,
                    metric_2: 0.2344,
                    metric_3: 0.9004,
                    metric_4: 0.2074,
                    metric_5: 0.6797,
                    metric_6: 0.4207,
                    metric_7: 0.7329,
                    metric_8: 0.9574
                },
                method2: {
                    metric_1: 18.9914,
                    metric_2: 0.166,
                    metric_3: 0.9807,
                    metric_4: 0.6925,
                    metric_5: 0.5826,
                    metric_6: 0.3955,
                    metric_7: 0.6494,
                    metric_8: 0.9246
                },
                method3: {
                    metric_1: 22.3496,
                    metric_2: 0.1754,
                    metric_3: 0.9728,
                    metric_4: 0.5206,
                    metric_5: 0.0414,
                    metric_6: 0.0813,
                    metric_7: 0.1534,
                    metric_8: 0.9587
                },
                method4: {
                    metric_1: 18.5992,
                    metric_2: 0.1554,
                    metric_3: 0.9792,
                    metric_4: 0.6486,
                    metric_5: 0.5474,
                    metric_6: 0.3651,
                    metric_7: 0.6187,
                    metric_8: 0.9165
                },
                method5: {
                    metric_1: 17.2441,
                    metric_2: 0.1317,
                    metric_3: 0.9814,
                    metric_4: 0.841,
                    metric_5: 0.4544,
                    metric_6: 0.268,
                    metric_7: 0.5171,
                    metric_8: 0.9372
                },
                method6: {
                    metric_1: 23.6958,
                    metric_2: 0.2131,
                    metric_3: 0.9073,
                    metric_4: 0.4833,
                    metric_5: 0.3166,
                    metric_6: 0.2017,
                    metric_7: 0.5112,
                    metric_8: 0.9575
                },
                method7: {
                    metric_1: 21.3378,
                    metric_2: 0.1877,
                    metric_3: 0.9239,
                    metric_4: 0.2089,
                    metric_5: 0.2233,
                    metric_6: 0.0354,
                    metric_7: 0.2615,
                    metric_8: 0.859
                },
                method8: {
                    metric_1: 23.5097,
                    metric_2: 0.2546,
                    metric_3: 0.7972,
                    metric_4: 0.2658,
                    metric_5: 0.6081,
                    metric_6: 0.4411,
                    metric_7: 0.6572,
                    metric_8: 0.9132
                }
            }
        },
        'object-change': {
            editPrompt: "Change the basketball to a soccer ball.",
            targetPrompt: "Players with different uniforms are playing a basketball match with a soccer ball in basketball arena. Player number 13 from the blue team score a goal after dodge a block.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0001/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0001/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0001/object_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0001/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0001/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0001/object_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0001/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0001/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.9571,
                    metric_2: 0.2747,
                    metric_3: 0.9151,
                    metric_4: 0.2194,
                    metric_5: 0.677,
                    metric_6: 0.4538,
                    metric_7: 0.7056,
                    metric_8: 0.9507
                },
                method2: {
                    metric_1: 19.061,
                    metric_2: 0.1731,
                    metric_3: 0.9786,
                    metric_4: 0.6492,
                    metric_5: 0.6893,
                    metric_6: 0.4266,
                    metric_7: 0.7319,
                    metric_8: 0.9201
                },
                method3: {
                    metric_1: 22.626,
                    metric_2: 0.1647,
                    metric_3: 0.973,
                    metric_4: 0.624,
                    metric_5: 0.2322,
                    metric_6: 0.1439,
                    metric_7: 0.3831,
                    metric_8: 0.945
                },
                method4: {
                    metric_1: 18.646,
                    metric_2: 0.1569,
                    metric_3: 0.978,
                    metric_4: 0.6391,
                    metric_5: 0.629,
                    metric_6: 0.3809,
                    metric_7: 0.7031,
                    metric_8: 0.9115
                },
                method5: {
                    metric_1: 22.9366,
                    metric_2: 0.1619,
                    metric_3: 0.9748,
                    metric_4: 0.7008,
                    metric_5: 0.4388,
                    metric_6: 0.2849,
                    metric_7: 0.5,
                    metric_8: 0.9303
                },
                method6: {
                    metric_1: 22.7514,
                    metric_2: 0.2241,
                    metric_3: 0.9197,
                    metric_4: 0.4965,
                    metric_5: 0.264,
                    metric_6: 0.2263,
                    metric_7: 0.4575,
                    metric_8: 0.9457
                },
                method7: {
                    metric_1: 19.9019,
                    metric_2: 0.1725,
                    metric_3: 0.9387,
                    metric_4: 0.2107,
                    metric_5: 0.2122,
                    metric_6: 0.033,
                    metric_7: 0.2598,
                    metric_8: 0.8567
                },
                method8: {
                    metric_1: 23.2,
                    metric_2: 0.2528,
                    metric_3: 0.9082,
                    metric_4: 0.2799,
                    metric_5: 0.6209,
                    metric_6: 0.4277,
                    metric_7: 0.6035,
                    metric_8: 0.9112
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a scoreboard showing the current game score.",
            targetPrompt: "Players with different uniforms are playing a basketball match in a basketball arena, and player number 13 from the blue team scores a goal after dodging a block, with a scoreboard showing the current game score.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0001/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0001/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0001/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0001/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0001/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0001/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0001/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0001/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.8012,
                    metric_2: 0.2389,
                    metric_3: 0.9155,
                    metric_4: 0.207,
                    metric_5: 0.6498,
                    metric_6: 0.425,
                    metric_7: 0.688,
                    metric_8: 0.9448
                },
                method2: {
                    metric_1: 18.9407,
                    metric_2: 0.171,
                    metric_3: 0.9811,
                    metric_4: 0.6419,
                    metric_5: 0.7001,
                    metric_6: 0.4464,
                    metric_7: 0.7354,
                    metric_8: 0.917
                },
                method3: {
                    metric_1: 17.0555,
                    metric_2: 0.1329,
                    metric_3: 0.9772,
                    metric_4: 0.7478,
                    metric_5: 0.5999,
                    metric_6: 0.3657,
                    metric_7: 0.6865,
                    metric_8: 0.9324
                },
                method4: {
                    metric_1: 18.8461,
                    metric_2: 0.1582,
                    metric_3: 0.9793,
                    metric_4: 0.6087,
                    metric_5: 0.6224,
                    metric_6: 0.419,
                    metric_7: 0.6963,
                    metric_8: 0.9109
                },
                method5: {
                    metric_1: 17.756,
                    metric_2: 0.1536,
                    metric_3: 0.9545,
                    metric_4: 0.7884,
                    metric_5: 0.4172,
                    metric_6: 0.2321,
                    metric_7: 0.4783,
                    metric_8: 0.941
                },
                method6: {
                    metric_1: 22.3474,
                    metric_2: 0.2115,
                    metric_3: 0.9399,
                    metric_4: 0.483,
                    metric_5: 0.1712,
                    metric_6: 0.2359,
                    metric_7: 0.3191,
                    metric_8: 0.9327
                },
                method7: {
                    metric_1: 21.5454,
                    metric_2: 0.2021,
                    metric_3: 0.9163,
                    metric_4: 0.2257,
                    metric_5: 0.2155,
                    metric_6: 0.0293,
                    metric_7: 0.2484,
                    metric_8: 0.8612
                },
                method8: {
                    metric_1: 23.3048,
                    metric_2: 0.2588,
                    metric_3: 0.8986,
                    metric_4: 0.2796,
                    metric_5: 0.5797,
                    metric_6: 0.3953,
                    metric_7: 0.6021,
                    metric_8: 0.9054
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the audience",
            targetPrompt: "Players with different uniforms are playing a basketball match in an empty basketball arena, and player number 13 from the blue team scores a goal after dodging a block.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0001/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0001/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0001/object_removal/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0001/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0001/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0001/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0001/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0001/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 21.8923,
                    metric_2: 0.2323,
                    metric_3: 0.9206,
                    metric_4: 0.2058,
                    metric_5: 0.6512,
                    metric_6: 0.4523,
                    metric_7: 0.6812,
                    metric_8: 0.9534
                },
                method2: {
                    metric_1: 18.0895,
                    metric_2: 0.1603,
                    metric_3: 0.9737,
                    metric_4: 0.6659,
                    metric_5: 0.6771,
                    metric_6: 0.4373,
                    metric_7: 0.7217,
                    metric_8: 0.921
                },
                method3: {
                    metric_1: 17.6623,
                    metric_2: 0.1323,
                    metric_3: 0.9792,
                    metric_4: 0.7579,
                    metric_5: 0.4753,
                    metric_6: 0.3095,
                    metric_7: 0.5405,
                    metric_8: 0.9473
                },
                method4: {
                    metric_1: 17.9132,
                    metric_2: 0.1466,
                    metric_3: 0.9781,
                    metric_4: 0.6356,
                    metric_5: 0.596,
                    metric_6: 0.4046,
                    metric_7: 0.6709,
                    metric_8: 0.9148
                },
                method5: {
                    metric_1: 15.4552,
                    metric_2: 0.1201,
                    metric_3: 0.982,
                    metric_4: 0.8417,
                    metric_5: 0.4938,
                    metric_6: 0.3201,
                    metric_7: 0.5542,
                    metric_8: 0.9319
                },
                method6: {
                    metric_1: 22.3689,
                    metric_2: 0.2279,
                    metric_3: 0.8776,
                    metric_4: 0.5059,
                    metric_5: 0.2257,
                    metric_6: 0.2491,
                    metric_7: 0.3445,
                    metric_8: 0.951
                },
                method7: {
                    metric_1: 22.0005,
                    metric_2: 0.1865,
                    metric_3: 0.9359,
                    metric_4: 0.2573,
                    metric_5: 0.2525,
                    metric_6: 0.0398,
                    metric_7: 0.3259,
                    metric_8: 0.8789
                },
                method8: {
                    metric_1: 23.9375,
                    metric_2: 0.2579,
                    metric_3: 0.8533,
                    metric_4: 0.2728,
                    metric_5: 0.6575,
                    metric_6: 0.4572,
                    metric_7: 0.6821,
                    metric_8: 0.9099
                }
            }
        },
        'scene-change': {
            editPrompt: "Move the game to an outdoor beach setting.",
            targetPrompt: "Players with different uniforms are playing a basketball match on an outdoor beach, and player number 13 from the blue team scores a goal after dodging a block.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0001/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0001/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0001/scene_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0001/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0001/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0001/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0001/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0001/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 20.6882,
                    metric_2: 0.1662,
                    metric_3: 0.9178,
                    metric_4: 0.2147,
                    metric_5: 0.6939,
                    metric_6: 0.4596,
                    metric_7: 0.686,
                    metric_8: 0.9536
                },
                method2: {
                    metric_1: 15.4602,
                    metric_2: 0.122,
                    metric_3: 0.9781,
                    metric_4: 0.6673,
                    metric_5: 0.678,
                    metric_6: 0.4374,
                    metric_7: 0.7354,
                    metric_8: 0.9198
                },
                method3: {
                    metric_1: 24.4837,
                    metric_2: 0.1264,
                    metric_3: 0.9621,
                    metric_4: 0.392,
                    metric_5: 0.181,
                    metric_6: 0.4171,
                    metric_7: 0.3477,
                    metric_8: 0.9656
                },
                method4: {
                    metric_1: 14.9808,
                    metric_2: 0.1092,
                    metric_3: 0.9778,
                    metric_4: 0.637,
                    metric_5: 0.614,
                    metric_6: 0.4293,
                    metric_7: 0.6875,
                    metric_8: 0.9123
                },
                method5: {
                    metric_1: 13.5142,
                    metric_2: 0.1313,
                    metric_3: 0.9804,
                    metric_4: 0.5574,
                    metric_5: 0.3732,
                    metric_6: 0.2103,
                    metric_7: 0.4551,
                    metric_8: 0.9316
                },
                method6: {
                    metric_1: 22.247,
                    metric_2: 0.2205,
                    metric_3: 0.8883,
                    metric_4: 0.4453,
                    metric_5: 0.2893,
                    metric_6: 0.3128,
                    metric_7: 0.4634,
                    metric_8: 0.948
                },
                method7: {
                    metric_1: 24.3173,
                    metric_2: 0.2549,
                    metric_3: 0.8209,
                    metric_4: 0.1954,
                    metric_5: 0.3836,
                    metric_6: 0.1467,
                    metric_7: 0.4839,
                    metric_8: 0.8586
                },
                method8: {
                    metric_1: 20.3471,
                    metric_2: 0.1929,
                    metric_3: 0.8598,
                    metric_4: 0.2188,
                    metric_5: 0.6574,
                    metric_6: 0.371,
                    metric_7: 0.7002,
                    metric_8: 0.9239
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Low Poly style",
            targetPrompt: "Players with different uniforms are playing a basketball match in basketball arena. Player number 13 from the blue team score a goal after dodge a block, depicted in a Low Poly style",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0001/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0001/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0001/stylization/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0001/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0001/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0001/stylization/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0001/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0001/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.8976,
                    metric_2: 0.2203,
                    metric_3: 0.9057,
                    metric_4: 0.1977,
                    metric_5: 0.6621,
                    metric_6: 0.4314,
                    metric_7: 0.6982,
                    metric_8: 0.9332
                },
                method2: {
                    metric_1: 19.6177,
                    metric_2: 0.1536,
                    metric_3: 0.9729,
                    metric_4: 0.6722,
                    metric_5: 0.5549,
                    metric_6: 0.3884,
                    metric_7: 0.6074,
                    metric_8: 0.9337
                },
                method3: {
                    metric_1: 26.5323,
                    metric_2: 0.1869,
                    metric_3: 0.977,
                    metric_4: 0.4251,
                    metric_5: 0.3351,
                    metric_6: 0.2126,
                    metric_7: 0.4387,
                    metric_8: 0.9507
                },
                method4: {
                    metric_1: 18.2558,
                    metric_2: 0.143,
                    metric_3: 0.9784,
                    metric_4: 0.6682,
                    metric_5: 0.5979,
                    metric_6: 0.4153,
                    metric_7: 0.6392,
                    metric_8: 0.9176
                },
                method5: {
                    metric_1: 27.115,
                    metric_2: 0.1676,
                    metric_3: 0.9735,
                    metric_4: 0.5889,
                    metric_5: 0.3986,
                    metric_6: 0.3587,
                    metric_7: 0.4766,
                    metric_8: 0.9379
                },
                method6: {
                    metric_1: 24.4072,
                    metric_2: 0.2173,
                    metric_3: 0.9029,
                    metric_4: 0.397,
                    metric_5: 0.2589,
                    metric_6: 0.2589,
                    metric_7: 0.3987,
                    metric_8: 0.931
                },
                method7: {
                    metric_1: 22.492,
                    metric_2: 0.1751,
                    metric_3: 0.9421,
                    metric_4: 0.2341,
                    metric_5: 0.2502,
                    metric_6: 0.0389,
                    metric_7: 0.311,
                    metric_8: 0.8612
                },
                method8: {
                    metric_1: 29.3329,
                    metric_2: 0.2083,
                    metric_3: 0.8601,
                    metric_4: 0.2602,
                    metric_5: 0.653,
                    metric_6: 0.4094,
                    metric_7: 0.6753,
                    metric_8: 0.9064
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/sport activity_0005/input.mp4",
    category: "Sport activity",
    originalCaption: "A group of people are dancing together in a modern, spacious living room with sofa and table.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the group of people dribbling basketballs.",
            targetPrompt: "A group of people are dribbling basketballs together in a modern, spacious living room with a sofa and table.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0005/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0005/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0005/motion_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0005/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0005/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0005/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0005/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0005/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.2029,
                    metric_2: 0.2961,
                    metric_3: 0.9177,
                    metric_4: 0.5148,
                    metric_5: 0.7318,
                    metric_6: 0.4991,
                    metric_7: 0.7427,
                    metric_8: 0.9786
                },
                method2: {
                    metric_1: 22.2817,
                    metric_2: 0.2102,
                    metric_3: 0.9438,
                    metric_4: 0.7894,
                    metric_5: 0.7341,
                    metric_6: 0.5185,
                    metric_7: 0.7402,
                    metric_8: 0.9704
                },
                method3: {
                    metric_1: 24.9428,
                    metric_2: 0.2348,
                    metric_3: 0.947,
                    metric_4: 0.6988,
                    metric_5: 0.7165,
                    metric_6: 0.3369,
                    metric_7: 0.731,
                    metric_8: 0.9645
                },
                method4: {
                    metric_1: 20.5529,
                    metric_2: 0.1605,
                    metric_3: 0.9713,
                    metric_4: 0.7994,
                    metric_5: 0.6265,
                    metric_6: 0.4831,
                    metric_7: 0.6787,
                    metric_8: 0.97
                },
                method5: {
                    metric_1: 24.9214,
                    metric_2: 0.2337,
                    metric_3: 0.9415,
                    metric_4: 0.7613,
                    metric_5: 0.5713,
                    metric_6: 0.3965,
                    metric_7: 0.6265,
                    metric_8: 0.9721
                },
                method6: {
                    metric_1: 26.981,
                    metric_2: 0.2779,
                    metric_3: 0.9228,
                    metric_4: 0.7131,
                    metric_5: 0.3938,
                    metric_6: 0.3045,
                    metric_7: 0.5073,
                    metric_8: 0.9679
                },
                method7: {
                    metric_1: 25.1751,
                    metric_2: 0.2185,
                    metric_3: 0.8277,
                    metric_4: 0.6001,
                    metric_5: 0.3801,
                    metric_6: 0.2654,
                    metric_7: 0.5332,
                    metric_8: 0.9541
                },
                method8: {
                    metric_1: 27.5493,
                    metric_2: 0.3094,
                    metric_3: 0.9481,
                    metric_4: 0.5803,
                    metric_5: 0.5026,
                    metric_6: 0.2761,
                    metric_7: 0.5356,
                    metric_8: 0.9737
                }
            }
        },
        'object-change': {
            editPrompt: "Change the group of people to a group of robots.",
            targetPrompt: "A group of robots are dancing together in a modern, spacious living room with a sofa and table.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0005/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0005/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0005/object_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0005/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0005/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0005/object_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0005/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0005/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.66,
                    metric_2: 0.3373,
                    metric_3: 0.9157,
                    metric_4: 0.509,
                    metric_5: 0.6596,
                    metric_6: 0.5546,
                    metric_7: 0.7266,
                    metric_8: 0.9649
                },
                method2: {
                    metric_1: 28.7773,
                    metric_2: 0.2598,
                    metric_3: 0.9389,
                    metric_4: 0.7868,
                    metric_5: 0.2078,
                    metric_6: 0.1023,
                    metric_7: 0.2903,
                    metric_8: 0.9735
                },
                method3: {
                    metric_1: 32.8692,
                    metric_2: 0.2359,
                    metric_3: 0.9243,
                    metric_4: 0.6608,
                    metric_5: 0.3593,
                    metric_6: 0.1742,
                    metric_7: 0.4785,
                    metric_8: 0.9737
                },
                method4: {
                    metric_1: 25.7323,
                    metric_2: 0.2165,
                    metric_3: 0.9642,
                    metric_4: 0.8242,
                    metric_5: 0.3651,
                    metric_6: 0.1931,
                    metric_7: 0.4685,
                    metric_8: 0.9739
                },
                method5: {
                    metric_1: 30.9107,
                    metric_2: 0.3017,
                    metric_3: 0.9507,
                    metric_4: 0.819,
                    metric_5: 0.6405,
                    metric_6: 0.4737,
                    metric_7: 0.6689,
                    metric_8: 0.9726
                },
                method6: {
                    metric_1: 29.1928,
                    metric_2: 0.2367,
                    metric_3: 0.9309,
                    metric_4: 0.6985,
                    metric_5: 0.2533,
                    metric_6: 0.254,
                    metric_7: 0.3728,
                    metric_8: 0.9691
                },
                method7: {
                    metric_1: 36.1936,
                    metric_2: 0.2778,
                    metric_3: 0.8753,
                    metric_4: 0.5391,
                    metric_5: 0.4507,
                    metric_6: 0.4065,
                    metric_7: 0.5391,
                    metric_8: 0.9496
                },
                method8: {
                    metric_1: 32.842,
                    metric_2: 0.3128,
                    metric_3: 0.937,
                    metric_4: 0.5587,
                    metric_5: 0.5774,
                    metric_6: 0.4166,
                    metric_7: 0.6011,
                    metric_8: 0.9524
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a disco ball hanging from the ceiling.",
            targetPrompt: "A group of people are dancing together in a modern, spacious living room with a sofa and table, and a disco ball hanging from the ceiling.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0005/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0005/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0005/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0005/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0005/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0005/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0005/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0005/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.5155,
                    metric_2: 0.2976,
                    metric_3: 0.9338,
                    metric_4: 0.5204,
                    metric_5: 0.5224,
                    metric_6: 0.3473,
                    metric_7: 0.5566,
                    metric_8: 0.9775
                },
                method2: {
                    metric_1: 24.4131,
                    metric_2: 0.216,
                    metric_3: 0.9444,
                    metric_4: 0.8073,
                    metric_5: 0.5182,
                    metric_6: 0.3088,
                    metric_7: 0.6279,
                    metric_8: 0.9702
                },
                method3: {
                    metric_1: 24.1608,
                    metric_2: 0.2232,
                    metric_3: 0.9472,
                    metric_4: 0.7196,
                    metric_5: 0.5676,
                    metric_6: 0.2827,
                    metric_7: 0.5771,
                    metric_8: 0.9677
                },
                method4: {
                    metric_1: 23.632,
                    metric_2: 0.2232,
                    metric_3: 0.968,
                    metric_4: 0.8079,
                    metric_5: 0.6624,
                    metric_6: 0.3818,
                    metric_7: 0.6929,
                    metric_8: 0.9689
                },
                method5: {
                    metric_1: 26.9586,
                    metric_2: 0.2506,
                    metric_3: 0.9579,
                    metric_4: 0.8408,
                    metric_5: 0.5285,
                    metric_6: 0.3155,
                    metric_7: 0.5591,
                    metric_8: 0.9761
                },
                method6: {
                    metric_1: 28.2766,
                    metric_2: 0.261,
                    metric_3: 0.9283,
                    metric_4: 0.7475,
                    metric_5: 0.3847,
                    metric_6: 0.3641,
                    metric_7: 0.4673,
                    metric_8: 0.9722
                },
                method7: {
                    metric_1: 28.5246,
                    metric_2: 0.2452,
                    metric_3: 0.8881,
                    metric_4: 0.506,
                    metric_5: 0.4311,
                    metric_6: 0.3833,
                    metric_7: 0.541,
                    metric_8: 0.9504
                },
                method8: {
                    metric_1: 25.5767,
                    metric_2: 0.3138,
                    metric_3: 0.9352,
                    metric_4: 0.5927,
                    metric_5: 0.4516,
                    metric_6: 0.3028,
                    metric_7: 0.4834,
                    metric_8: 0.9641
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the sofa and table.",
            targetPrompt: "A group of people are dancing together in a modern, spacious living room.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0005/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0005/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0005/object_removal/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0005/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0005/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0005/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0005/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0005/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.1872,
                    metric_2: 0.2915,
                    metric_3: 0.931,
                    metric_4: 0.5155,
                    metric_5: 0.5644,
                    metric_6: 0.4413,
                    metric_7: 0.6406,
                    metric_8: 0.9745
                },
                method2: {
                    metric_1: 26.7488,
                    metric_2: 0.266,
                    metric_3: 0.9507,
                    metric_4: 0.8421,
                    metric_5: 0.4922,
                    metric_6: 0.277,
                    metric_7: 0.5791,
                    metric_8: 0.9724
                },
                method3: {
                    metric_1: 27.3247,
                    metric_2: 0.2995,
                    metric_3: 0.9508,
                    metric_4: 0.8462,
                    metric_5: 0.3823,
                    metric_6: 0.3746,
                    metric_7: 0.5205,
                    metric_8: 0.9739
                },
                method4: {
                    metric_1: 26.9065,
                    metric_2: 0.2766,
                    metric_3: 0.9689,
                    metric_4: 0.8394,
                    metric_5: 0.5466,
                    metric_6: 0.3286,
                    metric_7: 0.6245,
                    metric_8: 0.9724
                },
                method5: {
                    metric_1: 26.7241,
                    metric_2: 0.2915,
                    metric_3: 0.9579,
                    metric_4: 0.9033,
                    metric_5: 0.5309,
                    metric_6: 0.3037,
                    metric_7: 0.5664,
                    metric_8: 0.9767
                },
                method6: {
                    metric_1: 28.6933,
                    metric_2: 0.2927,
                    metric_3: 0.9108,
                    metric_4: 0.7521,
                    metric_5: 0.3354,
                    metric_6: 0.3092,
                    metric_7: 0.4729,
                    metric_8: 0.9738
                },
                method7: {
                    metric_1: 30.3544,
                    metric_2: 0.2891,
                    metric_3: 0.9044,
                    metric_4: 0.584,
                    metric_5: 0.3717,
                    metric_6: 0.2839,
                    metric_7: 0.4768,
                    metric_8: 0.9558
                },
                method8: {
                    metric_1: 26.4222,
                    metric_2: 0.3175,
                    metric_3: 0.9331,
                    metric_4: 0.6148,
                    metric_5: 0.478,
                    metric_6: 0.2951,
                    metric_7: 0.5127,
                    metric_8: 0.9626
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a medieval castle ballroom.",
            targetPrompt: "A group of people are dancing together in a medieval castle ballroom with sofa and table.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0005/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0005/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0005/scene_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0005/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0005/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0005/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0005/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0005/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.6161,
                    metric_2: 0.2526,
                    metric_3: 0.9289,
                    metric_4: 0.4624,
                    metric_5: 0.5471,
                    metric_6: 0.4471,
                    metric_7: 0.6509,
                    metric_8: 0.9794
                },
                method2: {
                    metric_1: 24.2042,
                    metric_2: 0.2366,
                    metric_3: 0.9418,
                    metric_4: 0.6979,
                    metric_5: 0.4587,
                    metric_6: 0.3741,
                    metric_7: 0.5967,
                    metric_8: 0.9715
                },
                method3: {
                    metric_1: 24.681,
                    metric_2: 0.2297,
                    metric_3: 0.9092,
                    metric_4: 0.2947,
                    metric_5: 0.4451,
                    metric_6: 0.4014,
                    metric_7: 0.5986,
                    metric_8: 0.9668
                },
                method4: {
                    metric_1: 25.913,
                    metric_2: 0.2545,
                    metric_3: 0.9589,
                    metric_4: 0.6832,
                    metric_5: 0.5182,
                    metric_6: 0.3611,
                    metric_7: 0.5713,
                    metric_8: 0.9693
                },
                method5: {
                    metric_1: 26.6293,
                    metric_2: 0.2358,
                    metric_3: 0.9522,
                    metric_4: 0.5545,
                    metric_5: 0.6044,
                    metric_6: 0.3247,
                    metric_7: 0.6865,
                    metric_8: 0.9779
                },
                method6: {
                    metric_1: 24.9258,
                    metric_2: 0.2025,
                    metric_3: 0.9238,
                    metric_4: 0.6224,
                    metric_5: 0.3048,
                    metric_6: 0.3638,
                    metric_7: 0.4189,
                    metric_8: 0.9756
                },
                method7: {
                    metric_1: 28.059,
                    metric_2: 0.2503,
                    metric_3: 0.8867,
                    metric_4: 0.4751,
                    metric_5: 0.4382,
                    metric_6: 0.3821,
                    metric_7: 0.5195,
                    metric_8: 0.9438
                },
                method8: {
                    metric_1: 25.0545,
                    metric_2: 0.2381,
                    metric_3: 0.9393,
                    metric_4: 0.4907,
                    metric_5: 0.333,
                    metric_6: 0.1875,
                    metric_7: 0.4001,
                    metric_8: 0.9617
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Steampunk style",
            targetPrompt: "A group of people are dancing together in a modern, spacious living room with sofa and table, depicted in a Steampunk style",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0005/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0005/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0005/stylization/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0005/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0005/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0005/stylization/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0005/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0005/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.8941,
                    metric_2: 0.2585,
                    metric_3: 0.923,
                    metric_4: 0.5004,
                    metric_5: 0.5458,
                    metric_6: 0.4172,
                    metric_7: 0.6001,
                    metric_8: 0.9759
                },
                method2: {
                    metric_1: 24.68,
                    metric_2: 0.1926,
                    metric_3: 0.9486,
                    metric_4: 0.7135,
                    metric_5: 0.5219,
                    metric_6: 0.4217,
                    metric_7: 0.6162,
                    metric_8: 0.9698
                },
                method3: {
                    metric_1: 33.3993,
                    metric_2: 0.2841,
                    metric_3: 0.9277,
                    metric_4: 0.3648,
                    metric_5: 0.6512,
                    metric_6: 0.5008,
                    metric_7: 0.6929,
                    metric_8: 0.9579
                },
                method4: {
                    metric_1: 28.5458,
                    metric_2: 0.2152,
                    metric_3: 0.9542,
                    metric_4: 0.6811,
                    metric_5: 0.3916,
                    metric_6: 0.2722,
                    metric_7: 0.481,
                    metric_8: 0.9653
                },
                method5: {
                    metric_1: 31.3571,
                    metric_2: 0.2823,
                    metric_3: 0.9565,
                    metric_4: 0.5996,
                    metric_5: 0.6871,
                    metric_6: 0.3783,
                    metric_7: 0.6958,
                    metric_8: 0.9707
                },
                method6: {
                    metric_1: 23.3301,
                    metric_2: 0.2256,
                    metric_3: 0.9228,
                    metric_4: 0.7101,
                    metric_5: 0.3296,
                    metric_6: 0.3501,
                    metric_7: 0.427,
                    metric_8: 0.9711
                },
                method7: {
                    metric_1: 28.6848,
                    metric_2: 0.2145,
                    metric_3: 0.8513,
                    metric_4: 0.542,
                    metric_5: 0.4007,
                    metric_6: 0.3633,
                    metric_7: 0.4971,
                    metric_8: 0.9511
                },
                method8: {
                    metric_1: 26.3978,
                    metric_2: 0.2431,
                    metric_3: 0.9455,
                    metric_4: 0.5753,
                    metric_5: 0.412,
                    metric_6: 0.2621,
                    metric_7: 0.4475,
                    metric_8: 0.9607
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/sport activity_0010/input.mp4",
    category: "Sport activity",
    originalCaption: "There is a baseball game being played on a green field with a red dirt infield with spectors, the players are wearing white and red uniforms. The ball was hitted and a player is runner to the base.",
    editTypes: {
        'motion-change': {
            editPrompt: "Tilt the camera downwards.",
            targetPrompt: "There is a baseball game being played on a green field with a red dirt infield, the players are wearing white and red uniforms, the ball was hit and a player is running to the base; tilt the camera downwards.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0010/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0010/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0010/motion_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0010/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0010/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0010/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0010/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0010/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 31.4188,
                    metric_2: 0.2342,
                    metric_3: 0.8689,
                    metric_4: 0.3607,
                    metric_5: 0.6931,
                    metric_6: 0.4148,
                    metric_7: 0.7466,
                    metric_8: 0.9879
                },
                method2: {
                    metric_1: 22.704,
                    metric_2: 0.2044,
                    metric_3: 0.8971,
                    metric_4: 0.6836,
                    metric_5: 0.8216,
                    metric_6: 0.5393,
                    metric_7: 0.7944,
                    metric_8: 0.9821
                },
                method3: {
                    metric_1: 26.3221,
                    metric_2: 0.2214,
                    metric_3: 0.8819,
                    metric_4: 0.7122,
                    metric_5: 0.2096,
                    metric_6: 0.3548,
                    metric_7: 0.4475,
                    metric_8: 0.9869
                },
                method4: {
                    metric_1: 24.7751,
                    metric_2: 0.2257,
                    metric_3: -1.0,
                    metric_4: 0.6476,
                    metric_5: 0.7164,
                    metric_6: 0.4739,
                    metric_7: 0.7461,
                    metric_8: 0.985
                },
                method5: {
                    metric_1: 23.1589,
                    metric_2: 0.1745,
                    metric_3: 0.9097,
                    metric_4: 0.695,
                    metric_5: 0.6228,
                    metric_6: 0.427,
                    metric_7: 0.5547,
                    metric_8: 0.9876
                },
                method6: {
                    metric_1: 26.0452,
                    metric_2: 0.2274,
                    metric_3: 0.8679,
                    metric_4: 0.5441,
                    metric_5: 0.5471,
                    metric_6: 0.4033,
                    metric_7: 0.5674,
                    metric_8: 0.9861
                },
                method7: {
                    metric_1: 25.4768,
                    metric_2: 0.2052,
                    metric_3: 0.89,
                    metric_4: 0.3173,
                    metric_5: 0.2427,
                    metric_6: 0.0592,
                    metric_7: 0.2756,
                    metric_8: 0.9786
                },
                method8: {
                    metric_1: 25.4782,
                    metric_2: 0.2347,
                    metric_3: 0.9039,
                    metric_4: 0.4424,
                    metric_5: 0.5055,
                    metric_6: 0.2692,
                    metric_7: 0.5142,
                    metric_8: 0.9803
                }
            }
        },
        'object-change': {
            editPrompt: "Change the clothes of the players.",
            targetPrompt: "There is a baseball game being played on a green field with a red dirt infield with robots watching; the players are now wearing new uniforms, and the ball was hit as a player runs to the base.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0010/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0010/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0010/object_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0010/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0010/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0010/object_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0010/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0010/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.1121,
                    metric_2: 0.1851,
                    metric_3: 0.878,
                    metric_4: 0.3563,
                    metric_5: 0.5985,
                    metric_6: 0.2784,
                    metric_7: 0.606,
                    metric_8: 0.9893
                },
                method2: {
                    metric_1: 21.6613,
                    metric_2: 0.1679,
                    metric_3: 0.8892,
                    metric_4: 0.6681,
                    metric_5: 0.8164,
                    metric_6: 0.5552,
                    metric_7: 0.7461,
                    metric_8: 0.9805
                },
                method3: {
                    metric_1: 33.6342,
                    metric_2: 0.1897,
                    metric_3: 0.8986,
                    metric_4: 0.6573,
                    metric_5: 0.6852,
                    metric_6: 0.4295,
                    metric_7: 0.7324,
                    metric_8: 0.9743
                },
                method4: {
                    metric_1: 23.5231,
                    metric_2: 0.1778,
                    metric_3: -1.0,
                    metric_4: 0.6259,
                    metric_5: 0.7285,
                    metric_6: 0.4377,
                    metric_7: 0.7295,
                    metric_8: 0.9841
                },
                method5: {
                    metric_1: 20.8022,
                    metric_2: 0.1798,
                    metric_3: 0.9127,
                    metric_4: 0.803,
                    metric_5: 0.7289,
                    metric_6: 0.5135,
                    metric_7: 0.7065,
                    metric_8: 0.9854
                },
                method6: {
                    metric_1: 27.1708,
                    metric_2: 0.1597,
                    metric_3: 0.8702,
                    metric_4: 0.5187,
                    metric_5: 0.5508,
                    metric_6: 0.3643,
                    metric_7: 0.5889,
                    metric_8: 0.9732
                },
                method7: {
                    metric_1: 27.6413,
                    metric_2: 0.1583,
                    metric_3: 0.8784,
                    metric_4: 0.369,
                    metric_5: 0.2392,
                    metric_6: 0.0663,
                    metric_7: 0.2527,
                    metric_8: 0.981
                },
                method8: {
                    metric_1: 25.4714,
                    metric_2: 0.1612,
                    metric_3: 0.9128,
                    metric_4: 0.4699,
                    metric_5: 0.4397,
                    metric_6: 0.2024,
                    metric_7: 0.4426,
                    metric_8: 0.977
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a scoreboard in the background.",
            targetPrompt: "There is a baseball game being played on a green field with a red dirt infield with spectors, the players are wearing white and red uniforms, and a scoreboard is in the background. The ball is hit and a player runs to the base.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0010/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0010/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0010/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0010/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0010/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0010/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0010/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0010/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.9702,
                    metric_2: 0.2057,
                    metric_3: 0.8606,
                    metric_4: 0.3871,
                    metric_5: 0.6079,
                    metric_6: 0.5002,
                    metric_7: 0.6875,
                    metric_8: 0.9907
                },
                method2: {
                    metric_1: 22.5865,
                    metric_2: 0.188,
                    metric_3: 0.8771,
                    metric_4: 0.6848,
                    metric_5: 0.8088,
                    metric_6: 0.5308,
                    metric_7: 0.8101,
                    metric_8: 0.983
                },
                method3: {
                    metric_1: 23.3625,
                    metric_2: 0.1893,
                    metric_3: 0.9181,
                    metric_4: 0.7724,
                    metric_5: 0.6196,
                    metric_6: 0.4348,
                    metric_7: 0.6714,
                    metric_8: 0.9862
                },
                method4: {
                    metric_1: 24.0265,
                    metric_2: 0.1954,
                    metric_3: -1.0,
                    metric_4: 0.6447,
                    metric_5: 0.7189,
                    metric_6: 0.4653,
                    metric_7: 0.73,
                    metric_8: 0.9858
                },
                method5: {
                    metric_1: 22.1396,
                    metric_2: 0.1781,
                    metric_3: 0.9009,
                    metric_4: 0.7073,
                    metric_5: 0.634,
                    metric_6: 0.432,
                    metric_7: 0.6284,
                    metric_8: 0.988
                },
                method6: {
                    metric_1: 23.4314,
                    metric_2: 0.1902,
                    metric_3: 0.8809,
                    metric_4: 0.5518,
                    metric_5: 0.4578,
                    metric_6: 0.3745,
                    metric_7: 0.5029,
                    metric_8: 0.9798
                },
                method7: {
                    metric_1: 22.888,
                    metric_2: 0.1564,
                    metric_3: 0.8586,
                    metric_4: 0.339,
                    metric_5: 0.2693,
                    metric_6: 0.0804,
                    metric_7: 0.3018,
                    metric_8: 0.975
                },
                method8: {
                    metric_1: 25.7513,
                    metric_2: 0.1908,
                    metric_3: 0.9096,
                    metric_4: 0.4636,
                    metric_5: 0.4114,
                    metric_6: 0.2098,
                    metric_7: 0.4207,
                    metric_8: 0.9779
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the red dirt infield.",
            targetPrompt: "There is a baseball game being played on a green field with spectors, the players are wearing white and red uniforms, and the ball was hit and a player is running to the base.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0010/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0010/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0010/object_removal/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0010/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0010/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0010/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0010/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0010/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.4254,
                    metric_2: 0.1971,
                    metric_3: 0.8685,
                    metric_4: 0.365,
                    metric_5: 0.6647,
                    metric_6: 0.3721,
                    metric_7: 0.7139,
                    metric_8: 0.9893
                },
                method2: {
                    metric_1: 20.7666,
                    metric_2: 0.1766,
                    metric_3: 0.8965,
                    metric_4: 0.6838,
                    metric_5: 0.8428,
                    metric_6: 0.5188,
                    metric_7: 0.8315,
                    metric_8: 0.9816
                },
                method3: {
                    metric_1: 24.1652,
                    metric_2: 0.2046,
                    metric_3: 0.8915,
                    metric_4: 0.7055,
                    metric_5: 0.5091,
                    metric_6: 0.3738,
                    metric_7: 0.5903,
                    metric_8: 0.9745
                },
                method4: {
                    metric_1: 20.9901,
                    metric_2: 0.1893,
                    metric_3: -1.0,
                    metric_4: 0.5996,
                    metric_5: 0.7997,
                    metric_6: 0.5164,
                    metric_7: 0.7637,
                    metric_8: 0.9832
                },
                method5: {
                    metric_1: 21.1537,
                    metric_2: 0.1767,
                    metric_3: 0.9144,
                    metric_4: 0.7146,
                    metric_5: 0.703,
                    metric_6: 0.4555,
                    metric_7: 0.6997,
                    metric_8: 0.9841
                },
                method6: {
                    metric_1: 22.1762,
                    metric_2: 0.178,
                    metric_3: 0.8805,
                    metric_4: 0.5932,
                    metric_5: 0.4575,
                    metric_6: 0.454,
                    metric_7: 0.5532,
                    metric_8: 0.9801
                },
                method7: {
                    metric_1: 21.7137,
                    metric_2: 0.1741,
                    metric_3: 0.8943,
                    metric_4: 0.4191,
                    metric_5: 0.223,
                    metric_6: 0.0623,
                    metric_7: 0.2356,
                    metric_8: 0.9817
                },
                method8: {
                    metric_1: 26.0789,
                    metric_2: 0.2008,
                    metric_3: 0.9191,
                    metric_4: 0.4475,
                    metric_5: 0.4259,
                    metric_6: 0.2027,
                    metric_7: 0.4497,
                    metric_8: 0.9784
                }
            }
        },
        'scene-change': {
            editPrompt: "Set it in a snowy mountain landscape.",
            targetPrompt: "There is a baseball game being played on a snowy mountain landscape, with the players wearing white and red uniforms, the players are wearing white and red uniforms. The ball was hitted and a player is runner to the base.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0010/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0010/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0010/scene_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0010/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0010/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0010/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0010/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0010/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.9916,
                    metric_2: 0.2367,
                    metric_3: 0.8479,
                    metric_4: 0.3736,
                    metric_5: 0.6969,
                    metric_6: 0.4111,
                    metric_7: 0.7529,
                    metric_8: 0.9906
                },
                method2: {
                    metric_1: 24.0517,
                    metric_2: 0.1574,
                    metric_3: 0.8946,
                    metric_4: 0.6598,
                    metric_5: 0.7579,
                    metric_6: 0.503,
                    metric_7: 0.7227,
                    metric_8: 0.9815
                },
                method3: {
                    metric_1: 21.2774,
                    metric_2: 0.1641,
                    metric_3: 0.8529,
                    metric_4: 0.4773,
                    metric_5: 0.7444,
                    metric_6: 0.3544,
                    metric_7: 0.7637,
                    metric_8: 0.9567
                },
                method4: {
                    metric_1: 21.7048,
                    metric_2: 0.1624,
                    metric_3: -1.0,
                    metric_4: 0.6435,
                    metric_5: 0.7965,
                    metric_6: 0.5292,
                    metric_7: 0.7661,
                    metric_8: 0.9836
                },
                method5: {
                    metric_1: 25.7361,
                    metric_2: 0.1834,
                    metric_3: 0.9041,
                    metric_4: 0.6445,
                    metric_5: 0.6645,
                    metric_6: 0.4666,
                    metric_7: 0.6689,
                    metric_8: 0.9846
                },
                method6: {
                    metric_1: 22.3057,
                    metric_2: 0.2032,
                    metric_3: 0.8739,
                    metric_4: 0.5691,
                    metric_5: 0.6477,
                    metric_6: 0.4885,
                    metric_7: 0.6606,
                    metric_8: 0.9797
                },
                method7: {
                    metric_1: 23.9323,
                    metric_2: 0.1346,
                    metric_3: 0.8958,
                    metric_4: 0.4152,
                    metric_5: 0.2454,
                    metric_6: 0.0697,
                    metric_7: 0.2632,
                    metric_8: 0.9793
                },
                method8: {
                    metric_1: 28.7995,
                    metric_2: 0.2145,
                    metric_3: 0.9075,
                    metric_4: 0.3651,
                    metric_5: 0.206,
                    metric_6: 0.0258,
                    metric_7: 0.2087,
                    metric_8: 0.9749
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Retro style",
            targetPrompt: "There is a baseball game being played on a green field with a red dirt infield, the players are wearing white and red uniforms. The ball was hitted and a player is runner to the base, depicted in a Retro style",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0010/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0010/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0010/stylization/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0010/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0010/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0010/stylization/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0010/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0010/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.7077,
                    metric_2: 0.2181,
                    metric_3: 0.8528,
                    metric_4: 0.3708,
                    metric_5: 0.7279,
                    metric_6: 0.4664,
                    metric_7: 0.7471,
                    metric_8: 0.9899
                },
                method2: {
                    metric_1: 22.4692,
                    metric_2: 0.2031,
                    metric_3: 0.8932,
                    metric_4: 0.6765,
                    metric_5: 0.8025,
                    metric_6: 0.5593,
                    metric_7: 0.7646,
                    metric_8: 0.9828
                },
                method3: {
                    metric_1: 26.9591,
                    metric_2: 0.1619,
                    metric_3: 0.9042,
                    metric_4: 0.7249,
                    metric_5: 0.724,
                    metric_6: 0.5103,
                    metric_7: 0.647,
                    metric_8: 0.9843
                },
                method4: {
                    metric_1: 24.2476,
                    metric_2: 0.2173,
                    metric_3: -1.0,
                    metric_4: 0.6205,
                    metric_5: 0.7357,
                    metric_6: 0.4538,
                    metric_7: 0.7383,
                    metric_8: 0.9829
                },
                method5: {
                    metric_1: 23.273,
                    metric_2: 0.1995,
                    metric_3: 0.9059,
                    metric_4: 0.7579,
                    metric_5: 0.5274,
                    metric_6: 0.3837,
                    metric_7: 0.5498,
                    metric_8: 0.9884
                },
                method6: {
                    metric_1: 27.4213,
                    metric_2: 0.1894,
                    metric_3: 0.8818,
                    metric_4: 0.5455,
                    metric_5: 0.3671,
                    metric_6: 0.2977,
                    metric_7: 0.4216,
                    metric_8: 0.98
                },
                method7: {
                    metric_1: 27.6592,
                    metric_2: 0.2234,
                    metric_3: 0.8912,
                    metric_4: 0.268,
                    metric_5: 0.2231,
                    metric_6: 0.04,
                    metric_7: 0.2664,
                    metric_8: 0.9739
                },
                method8: {
                    metric_1: 27.1661,
                    metric_2: 0.2294,
                    metric_3: 0.8981,
                    metric_4: 0.4592,
                    metric_5: 0.4617,
                    metric_6: 0.2318,
                    metric_7: 0.4727,
                    metric_8: 0.9788
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/sport activity_0023/input.mp4",
    category: "Sport activity",
    originalCaption: "A person is hiking on a vast desert with rolling, reddish sandstone formations.",
    editTypes: {
        'motion-change': {
            editPrompt: "Rotate the camera clockwise.",
            targetPrompt: "A person is hiking on a vast desert with rolling, reddish sandstone formations as the camera rotates clockwise.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0023/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0023/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0023/motion_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0023/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0023/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0023/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0023/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0023/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.6722,
                    metric_2: 0.2635,
                    metric_3: 0.8495,
                    metric_4: 0.5283,
                    metric_5: 0.7635,
                    metric_6: 0.5846,
                    metric_7: 0.7632,
                    metric_8: 0.9857
                },
                method2: {
                    metric_1: 25.7922,
                    metric_2: 0.2664,
                    metric_3: 0.8949,
                    metric_4: 0.652,
                    metric_5: 0.7094,
                    metric_6: 0.5809,
                    metric_7: 0.7817,
                    metric_8: 0.9896
                },
                method3: {
                    metric_1: 25.7222,
                    metric_2: 0.2445,
                    metric_3: 0.891,
                    metric_4: 0.813,
                    metric_5: 0.302,
                    metric_6: 0.2679,
                    metric_7: 0.373,
                    metric_8: 0.9925
                },
                method4: {
                    metric_1: 25.4774,
                    metric_2: 0.2617,
                    metric_3: 0.8947,
                    metric_4: 0.6466,
                    metric_5: 0.6881,
                    metric_6: 0.5673,
                    metric_7: 0.7358,
                    metric_8: 0.9733
                },
                method5: {
                    metric_1: 26.2167,
                    metric_2: 0.2291,
                    metric_3: 0.9043,
                    metric_4: 0.6921,
                    metric_5: 0.4793,
                    metric_6: 0.3905,
                    metric_7: 0.5962,
                    metric_8: 0.9888
                },
                method6: {
                    metric_1: 26.6139,
                    metric_2: 0.2794,
                    metric_3: 0.8796,
                    metric_4: 0.6827,
                    metric_5: 0.426,
                    metric_6: 0.3928,
                    metric_7: 0.5737,
                    metric_8: 0.984
                },
                method7: {
                    metric_1: 27.2941,
                    metric_2: 0.2626,
                    metric_3: 0.8946,
                    metric_4: 0.4101,
                    metric_5: 0.2759,
                    metric_6: 0.2272,
                    metric_7: 0.3145,
                    metric_8: 0.9616
                },
                method8: {
                    metric_1: 27.2515,
                    metric_2: 0.2655,
                    metric_3: 0.8946,
                    metric_4: 0.6054,
                    metric_5: 0.5058,
                    metric_6: 0.4302,
                    metric_7: 0.5605,
                    metric_8: 0.9892
                }
            }
        },
        'object-change': {
            editPrompt: "Change the person to a mountain goat.",
            targetPrompt: "A mountain goat is hiking on a vast desert with rolling, reddish sandstone formations.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0023/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0023/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0023/object_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0023/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0023/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0023/object_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0023/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0023/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.4848,
                    metric_2: 0.2325,
                    metric_3: 0.8621,
                    metric_4: 0.5003,
                    metric_5: 0.7614,
                    metric_6: 0.5121,
                    metric_7: 0.8086,
                    metric_8: 0.9866
                },
                method2: {
                    metric_1: 28.8647,
                    metric_2: 0.2973,
                    metric_3: 0.8926,
                    metric_4: 0.5828,
                    metric_5: 0.7652,
                    metric_6: 0.5685,
                    metric_7: 0.8618,
                    metric_8: 0.9879
                },
                method3: {
                    metric_1: 23.0425,
                    metric_2: 0.188,
                    metric_3: 0.8838,
                    metric_4: 0.6826,
                    metric_5: 0.5661,
                    metric_6: 0.3681,
                    metric_7: 0.7236,
                    metric_8: 0.9894
                },
                method4: {
                    metric_1: 25.5914,
                    metric_2: 0.2629,
                    metric_3: 0.8966,
                    metric_4: 0.5667,
                    metric_5: 0.776,
                    metric_6: 0.5034,
                    metric_7: 0.8018,
                    metric_8: 0.9748
                },
                method5: {
                    metric_1: 27.4594,
                    metric_2: 0.2827,
                    metric_3: 0.8951,
                    metric_4: 0.6906,
                    metric_5: 0.6855,
                    metric_6: 0.6373,
                    metric_7: 0.7007,
                    metric_8: 0.9872
                },
                method6: {
                    metric_1: 23.4786,
                    metric_2: 0.2451,
                    metric_3: 0.8869,
                    metric_4: 0.6462,
                    metric_5: 0.4427,
                    metric_6: 0.4207,
                    metric_7: 0.6353,
                    metric_8: 0.9852
                },
                method7: {
                    metric_1: 23.7566,
                    metric_2: 0.2194,
                    metric_3: 0.8881,
                    metric_4: 0.3774,
                    metric_5: 0.2861,
                    metric_6: 0.2545,
                    metric_7: 0.3184,
                    metric_8: 0.9675
                },
                method8: {
                    metric_1: 23.8763,
                    metric_2: 0.2272,
                    metric_3: 0.8829,
                    metric_4: 0.5349,
                    metric_5: 0.3879,
                    metric_6: 0.2785,
                    metric_7: 0.481,
                    metric_8: 0.9889
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a panoramic camera on the person's backpack.",
            targetPrompt: "A person is hiking on a vast desert with rolling, reddish sandstone formations, with a panoramic camera mounted on their backpack.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0023/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0023/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0023/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0023/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0023/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0023/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0023/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0023/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 31.3863,
                    metric_2: 0.3135,
                    metric_3: 0.8536,
                    metric_4: 0.5515,
                    metric_5: 0.7723,
                    metric_6: 0.6172,
                    metric_7: 0.792,
                    metric_8: 0.988
                },
                method2: {
                    metric_1: 26.9734,
                    metric_2: 0.295,
                    metric_3: 0.8968,
                    metric_4: 0.6367,
                    metric_5: 0.8146,
                    metric_6: 0.6496,
                    metric_7: 0.856,
                    metric_8: 0.988
                },
                method3: {
                    metric_1: 27.6138,
                    metric_2: 0.2831,
                    metric_3: 0.8952,
                    metric_4: 0.7882,
                    metric_5: 0.3383,
                    metric_6: 0.1896,
                    metric_7: 0.4053,
                    metric_8: 0.9889
                },
                method4: {
                    metric_1: 27.0399,
                    metric_2: 0.2963,
                    metric_3: 0.8875,
                    metric_4: 0.6147,
                    metric_5: 0.8285,
                    metric_6: 0.6901,
                    metric_7: 0.8159,
                    metric_8: 0.9559
                },
                method5: {
                    metric_1: 27.0288,
                    metric_2: 0.2838,
                    metric_3: 0.8906,
                    metric_4: 0.7569,
                    metric_5: 0.6162,
                    metric_6: 0.4865,
                    metric_7: 0.6831,
                    metric_8: 0.9904
                },
                method6: {
                    metric_1: 29.0139,
                    metric_2: 0.3163,
                    metric_3: 0.8919,
                    metric_4: 0.6707,
                    metric_5: 0.5122,
                    metric_6: 0.4483,
                    metric_7: 0.6006,
                    metric_8: 0.9817
                },
                method7: {
                    metric_1: 29.6234,
                    metric_2: 0.3017,
                    metric_3: 0.8826,
                    metric_4: 0.3761,
                    metric_5: 0.2159,
                    metric_6: 0.2159,
                    metric_7: 0.2561,
                    metric_8: 0.9599
                },
                method8: {
                    metric_1: 27.9627,
                    metric_2: 0.288,
                    metric_3: 0.9005,
                    metric_4: 0.6094,
                    metric_5: 0.5428,
                    metric_6: 0.451,
                    metric_7: 0.6289,
                    metric_8: 0.989
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the hiking poles.",
            targetPrompt: "A person is hiking without hiking poles on a vast desert with rolling, reddish sandstone formations, without hiking poles.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0023/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0023/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0023/object_removal/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0023/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0023/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0023/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0023/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0023/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.7746,
                    metric_2: 0.3257,
                    metric_3: 0.8651,
                    metric_4: 0.4998,
                    metric_5: 0.7489,
                    metric_6: 0.5808,
                    metric_7: 0.8042,
                    metric_8: 0.9859
                },
                method2: {
                    metric_1: 28.2862,
                    metric_2: 0.3198,
                    metric_3: 0.8934,
                    metric_4: 0.6267,
                    metric_5: 0.8059,
                    metric_6: 0.6162,
                    metric_7: 0.8477,
                    metric_8: 0.9879
                },
                method3: {
                    metric_1: 26.5974,
                    metric_2: 0.3008,
                    metric_3: 0.8983,
                    metric_4: 0.8165,
                    metric_5: 0.4442,
                    metric_6: 0.2975,
                    metric_7: 0.4788,
                    metric_8: 0.9917
                },
                method4: {
                    metric_1: 28.0572,
                    metric_2: 0.3051,
                    metric_3: 0.8939,
                    metric_4: 0.6193,
                    metric_5: 0.7961,
                    metric_6: 0.6478,
                    metric_7: 0.7964,
                    metric_8: 0.9624
                },
                method5: {
                    metric_1: 27.6641,
                    metric_2: 0.3042,
                    metric_3: 0.891,
                    metric_4: 0.7582,
                    metric_5: 0.5164,
                    metric_6: 0.466,
                    metric_7: 0.6763,
                    metric_8: 0.9907
                },
                method6: {
                    metric_1: 30.0406,
                    metric_2: 0.3226,
                    metric_3: 0.8933,
                    metric_4: 0.6652,
                    metric_5: 0.5552,
                    metric_6: 0.4847,
                    metric_7: 0.6455,
                    metric_8: 0.9826
                },
                method7: {
                    metric_1: 29.112,
                    metric_2: 0.3015,
                    metric_3: 0.8878,
                    metric_4: 0.3825,
                    metric_5: 0.2376,
                    metric_6: 0.2017,
                    metric_7: 0.2715,
                    metric_8: 0.9606
                },
                method8: {
                    metric_1: 27.6755,
                    metric_2: 0.3063,
                    metric_3: 0.8962,
                    metric_4: 0.618,
                    metric_5: 0.5574,
                    metric_6: 0.4594,
                    metric_7: 0.6143,
                    metric_8: 0.989
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it a snowy mountain environment.",
            targetPrompt: "A person is hiking on a vast, snowy mountain with rolling, white snow-covered formations.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0023/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0023/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0023/scene_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0023/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0023/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0023/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0023/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0023/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.0499,
                    metric_2: 0.2351,
                    metric_3: 0.8687,
                    metric_4: 0.4466,
                    metric_5: 0.9465,
                    metric_6: 0.701,
                    metric_7: 0.9116,
                    metric_8: 0.9831
                },
                method2: {
                    metric_1: 25.2553,
                    metric_2: 0.2569,
                    metric_3: 0.88,
                    metric_4: 0.5825,
                    metric_5: 0.921,
                    metric_6: 0.7122,
                    metric_7: 0.9185,
                    metric_8: 0.9861
                },
                method3: {
                    metric_1: 25.9646,
                    metric_2: 0.2501,
                    metric_3: 0.8754,
                    metric_4: 0.5465,
                    metric_5: 0.7685,
                    metric_6: 0.6289,
                    metric_7: 0.8784,
                    metric_8: 0.9831
                },
                method4: {
                    metric_1: 24.9109,
                    metric_2: 0.2549,
                    metric_3: 0.8837,
                    metric_4: 0.5709,
                    metric_5: 0.8549,
                    metric_6: 0.7011,
                    metric_7: 0.8906,
                    metric_8: 0.9634
                },
                method5: {
                    metric_1: 24.2697,
                    metric_2: 0.2185,
                    metric_3: 0.8885,
                    metric_4: 0.722,
                    metric_5: 0.4918,
                    metric_6: 0.3695,
                    metric_7: 0.5649,
                    metric_8: 0.9902
                },
                method6: {
                    metric_1: 25.7911,
                    metric_2: 0.2563,
                    metric_3: 0.8756,
                    metric_4: 0.5817,
                    metric_5: 0.7652,
                    metric_6: 0.552,
                    metric_7: 0.7988,
                    metric_8: 0.9757
                },
                method7: {
                    metric_1: 24.8744,
                    metric_2: 0.2394,
                    metric_3: 0.8659,
                    metric_4: 0.4083,
                    metric_5: 0.4,
                    metric_6: 0.3558,
                    metric_7: 0.4656,
                    metric_8: 0.9601
                },
                method8: {
                    metric_1: 24.5583,
                    metric_2: 0.2468,
                    metric_3: 0.9046,
                    metric_4: 0.528,
                    metric_5: 0.6136,
                    metric_6: 0.4688,
                    metric_7: 0.6855,
                    metric_8: 0.9867
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Analog Film style",
            targetPrompt: "A person is hiking on a a vast desert with rolling, reddish sandstone formations, depicted in a Analog Film style",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0023/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0023/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0023/stylization/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0023/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0023/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0023/stylization/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0023/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0023/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.5909,
                    metric_2: 0.2819,
                    metric_3: 0.8657,
                    metric_4: 0.5447,
                    metric_5: 0.734,
                    metric_6: 0.5872,
                    metric_7: 0.7935,
                    metric_8: 0.9875
                },
                method2: {
                    metric_1: 28.3393,
                    metric_2: 0.2908,
                    metric_3: 0.8913,
                    metric_4: 0.6336,
                    metric_5: 0.7061,
                    metric_6: 0.651,
                    metric_7: 0.7847,
                    metric_8: 0.9859
                },
                method3: {
                    metric_1: 30.2093,
                    metric_2: 0.2703,
                    metric_3: 0.8685,
                    metric_4: 0.7383,
                    metric_5: 0.1825,
                    metric_6: 0.3905,
                    metric_7: 0.2209,
                    metric_8: 0.9811
                },
                method4: {
                    metric_1: 27.3261,
                    metric_2: 0.2898,
                    metric_3: 0.8909,
                    metric_4: 0.6339,
                    metric_5: 0.7108,
                    metric_6: 0.6395,
                    metric_7: 0.77,
                    metric_8: 0.9315
                },
                method5: {
                    metric_1: 29.2328,
                    metric_2: 0.2667,
                    metric_3: 0.8962,
                    metric_4: 0.6351,
                    metric_5: 0.4351,
                    metric_6: 0.4704,
                    metric_7: 0.4893,
                    metric_8: 0.9875
                },
                method6: {
                    metric_1: 28.5718,
                    metric_2: 0.293,
                    metric_3: 0.8745,
                    metric_4: 0.6098,
                    metric_5: 0.5466,
                    metric_6: 0.5977,
                    metric_7: 0.6567,
                    metric_8: 0.9784
                },
                method7: {
                    metric_1: 32.1076,
                    metric_2: 0.3072,
                    metric_3: 0.8906,
                    metric_4: 0.3796,
                    metric_5: 0.2454,
                    metric_6: 0.2019,
                    metric_7: 0.2749,
                    metric_8: 0.9619
                },
                method8: {
                    metric_1: 28.5114,
                    metric_2: 0.312,
                    metric_3: 0.9005,
                    metric_4: 0.6221,
                    metric_5: 0.4413,
                    metric_6: 0.3917,
                    metric_7: 0.4727,
                    metric_8: 0.9907
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/sport activity_0024/input.mp4",
    category: "Sport activity",
    originalCaption: "A man swimming underwater in a swimming pool.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the man diving into the water.",
            targetPrompt: "A man diving into the water of a swimming pool.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0024/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0024/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0024/motion_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0024/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0024/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0024/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0024/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0024/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.1242,
                    metric_2: 0.2189,
                    metric_3: 0.8555,
                    metric_4: 0.3605,
                    metric_5: 0.7544,
                    metric_6: 0.5218,
                    metric_7: 0.8071,
                    metric_8: 0.9832
                },
                method2: {
                    metric_1: 25.7366,
                    metric_2: 0.212,
                    metric_3: 0.9214,
                    metric_4: 0.5444,
                    metric_5: 0.8443,
                    metric_6: 0.5454,
                    metric_7: 0.918,
                    metric_8: 0.9774
                },
                method3: {
                    metric_1: 26.4341,
                    metric_2: 0.2367,
                    metric_3: 0.9071,
                    metric_4: 0.6061,
                    metric_5: 0.416,
                    metric_6: 0.4577,
                    metric_7: 0.5542,
                    metric_8: 0.9664
                },
                method4: {
                    metric_1: 24.7368,
                    metric_2: 0.2088,
                    metric_3: 0.9373,
                    metric_4: 0.5883,
                    metric_5: 0.8746,
                    metric_6: 0.5821,
                    metric_7: 0.8979,
                    metric_8: 0.9732
                },
                method5: {
                    metric_1: 24.304,
                    metric_2: 0.2082,
                    metric_3: 0.9366,
                    metric_4: 0.8399,
                    metric_5: 0.7368,
                    metric_6: 0.4819,
                    metric_7: 0.7866,
                    metric_8: 0.9824
                },
                method6: {
                    metric_1: 27.9373,
                    metric_2: 0.2243,
                    metric_3: 0.9252,
                    metric_4: 0.5405,
                    metric_5: 0.7467,
                    metric_6: 0.5089,
                    metric_7: 0.7798,
                    metric_8: 0.9672
                },
                method7: {
                    metric_1: 24.8863,
                    metric_2: 0.226,
                    metric_3: 0.931,
                    metric_4: 0.4787,
                    metric_5: 0.5914,
                    metric_6: 0.4727,
                    metric_7: 0.6377,
                    metric_8: 0.9569
                },
                method8: {
                    metric_1: 25.5573,
                    metric_2: 0.2164,
                    metric_3: 0.8916,
                    metric_4: 0.5254,
                    metric_5: 0.6379,
                    metric_6: 0.4375,
                    metric_7: 0.7617,
                    metric_8: 0.9827
                }
            }
        },
        'object-change': {
            editPrompt: "Change the man to a woman.",
            targetPrompt: "A woman swimming underwater in a swimming pool.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0024/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0024/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0024/object_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0024/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0024/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0024/object_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0024/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0024/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.6698,
                    metric_2: 0.2444,
                    metric_3: 0.8222,
                    metric_4: 0.3779,
                    metric_5: 0.7687,
                    metric_6: 0.6426,
                    metric_7: 0.8232,
                    metric_8: 0.9868
                },
                method2: {
                    metric_1: 23.9881,
                    metric_2: 0.1772,
                    metric_3: 0.8907,
                    metric_4: 0.5508,
                    metric_5: 0.8221,
                    metric_6: 0.4918,
                    metric_7: 0.9023,
                    metric_8: 0.9811
                },
                method3: {
                    metric_1: 23.845,
                    metric_2: 0.1875,
                    metric_3: 0.9112,
                    metric_4: 0.7971,
                    metric_5: 0.7522,
                    metric_6: 0.4898,
                    metric_7: 0.7749,
                    metric_8: 0.9817
                },
                method4: {
                    metric_1: 23.0493,
                    metric_2: 0.1836,
                    metric_3: 0.9302,
                    metric_4: 0.6074,
                    metric_5: 0.8521,
                    metric_6: 0.5682,
                    metric_7: 0.8984,
                    metric_8: 0.9737
                },
                method5: {
                    metric_1: 21.7322,
                    metric_2: 0.1703,
                    metric_3: 0.9218,
                    metric_4: 0.8452,
                    metric_5: 0.7387,
                    metric_6: 0.4965,
                    metric_7: 0.7983,
                    metric_8: 0.9838
                },
                method6: {
                    metric_1: 25.8461,
                    metric_2: 0.2473,
                    metric_3: 0.9216,
                    metric_4: 0.552,
                    metric_5: 0.788,
                    metric_6: 0.66,
                    metric_7: 0.8652,
                    metric_8: 0.9717
                },
                method7: {
                    metric_1: 30.0533,
                    metric_2: 0.2576,
                    metric_3: 0.9079,
                    metric_4: 0.4514,
                    metric_5: 0.5482,
                    metric_6: 0.4185,
                    metric_7: 0.5977,
                    metric_8: 0.9553
                },
                method8: {
                    metric_1: 28.316,
                    metric_2: 0.2509,
                    metric_3: 0.9015,
                    metric_4: 0.4969,
                    metric_5: 0.7349,
                    metric_6: 0.5213,
                    metric_7: 0.7974,
                    metric_8: 0.9759
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a colorful fish swimming nearby.",
            targetPrompt: "A man swimming underwater in a swimming pool with a colorful fish swimming nearby.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0024/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0024/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0024/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0024/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0024/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0024/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0024/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0024/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.2868,
                    metric_2: 0.196,
                    metric_3: 0.8683,
                    metric_4: 0.4023,
                    metric_5: 0.7203,
                    metric_6: 0.5073,
                    metric_7: 0.8018,
                    metric_8: 0.9855
                },
                method2: {
                    metric_1: 23.1178,
                    metric_2: 0.1677,
                    metric_3: 0.9211,
                    metric_4: 0.537,
                    metric_5: 0.8076,
                    metric_6: 0.4834,
                    metric_7: 0.9019,
                    metric_8: 0.9795
                },
                method3: {
                    metric_1: 28.2085,
                    metric_2: 0.2609,
                    metric_3: 0.897,
                    metric_4: 0.56,
                    metric_5: 0.4417,
                    metric_6: 0.2729,
                    metric_7: 0.6055,
                    metric_8: 0.9595
                },
                method4: {
                    metric_1: 21.9843,
                    metric_2: 0.1726,
                    metric_3: 0.9141,
                    metric_4: 0.5823,
                    metric_5: 0.8366,
                    metric_6: 0.5504,
                    metric_7: 0.8975,
                    metric_8: 0.9748
                },
                method5: {
                    metric_1: 24.0699,
                    metric_2: 0.185,
                    metric_3: 0.916,
                    metric_4: 0.6666,
                    metric_5: 0.6999,
                    metric_6: 0.4639,
                    metric_7: 0.7593,
                    metric_8: 0.9793
                },
                method6: {
                    metric_1: 23.2486,
                    metric_2: 0.1854,
                    metric_3: 0.9049,
                    metric_4: 0.5514,
                    metric_5: 0.5362,
                    metric_6: 0.3885,
                    metric_7: 0.6685,
                    metric_8: 0.9739
                },
                method7: {
                    metric_1: 25.1597,
                    metric_2: 0.2037,
                    metric_3: 0.9277,
                    metric_4: 0.4534,
                    metric_5: 0.5032,
                    metric_6: 0.3641,
                    metric_7: 0.5938,
                    metric_8: 0.9544
                },
                method8: {
                    metric_1: 21.2691,
                    metric_2: 0.1795,
                    metric_3: 0.8966,
                    metric_4: 0.505,
                    metric_5: 0.703,
                    metric_6: 0.5027,
                    metric_7: 0.7583,
                    metric_8: 0.9775
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the man's reflection from the surface of the pool.",
            targetPrompt: "A man swimming underwater in a swimming pool without any reflection on the surface of the pool.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0024/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0024/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0024/object_removal/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0024/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0024/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0024/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0024/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0024/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.24,
                    metric_2: 0.2311,
                    metric_3: 0.8952,
                    metric_4: 0.3731,
                    metric_5: 0.7473,
                    metric_6: 0.5606,
                    metric_7: 0.8052,
                    metric_8: 0.987
                },
                method2: {
                    metric_1: 27.6518,
                    metric_2: 0.2314,
                    metric_3: 0.9221,
                    metric_4: 0.5439,
                    metric_5: 0.7833,
                    metric_6: 0.4633,
                    metric_7: 0.8701,
                    metric_8: 0.9809
                },
                method3: {
                    metric_1: 28.3232,
                    metric_2: 0.2326,
                    metric_3: 0.8959,
                    metric_4: 0.8268,
                    metric_5: 0.6778,
                    metric_6: 0.4215,
                    metric_7: 0.7583,
                    metric_8: 0.9872
                },
                method4: {
                    metric_1: 26.8308,
                    metric_2: 0.2368,
                    metric_3: 0.9256,
                    metric_4: 0.5979,
                    metric_5: 0.7888,
                    metric_6: 0.4843,
                    metric_7: 0.8457,
                    metric_8: 0.9748
                },
                method5: {
                    metric_1: 27.8942,
                    metric_2: 0.2382,
                    metric_3: 0.9404,
                    metric_4: 0.705,
                    metric_5: 0.7333,
                    metric_6: 0.4858,
                    metric_7: 0.8008,
                    metric_8: 0.9824
                },
                method6: {
                    metric_1: 29.8256,
                    metric_2: 0.2306,
                    metric_3: 0.911,
                    metric_4: 0.5705,
                    metric_5: 0.701,
                    metric_6: 0.4961,
                    metric_7: 0.7505,
                    metric_8: 0.976
                },
                method7: {
                    metric_1: 28.4602,
                    metric_2: 0.2458,
                    metric_3: 0.9206,
                    metric_4: 0.4685,
                    metric_5: 0.538,
                    metric_6: 0.4242,
                    metric_7: 0.5933,
                    metric_8: 0.9577
                },
                method8: {
                    metric_1: 26.3892,
                    metric_2: 0.2273,
                    metric_3: 0.8883,
                    metric_4: 0.5088,
                    metric_5: 0.7182,
                    metric_6: 0.4859,
                    metric_7: 0.7612,
                    metric_8: 0.9764
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in the ocean.",
            targetPrompt: "A man swimming underwater in the ocean.",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0024/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0024/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0024/scene_change/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0024/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0024/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0024/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0024/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0024/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.6113,
                    metric_2: 0.2226,
                    metric_3: 0.8521,
                    metric_4: 0.3758,
                    metric_5: 0.7493,
                    metric_6: 0.562,
                    metric_7: 0.791,
                    metric_8: 0.9836
                },
                method2: {
                    metric_1: 25.9608,
                    metric_2: 0.2111,
                    metric_3: 0.908,
                    metric_4: 0.5392,
                    metric_5: 0.7697,
                    metric_6: 0.4504,
                    metric_7: 0.8428,
                    metric_8: 0.9827
                },
                method3: {
                    metric_1: 25.7618,
                    metric_2: 0.2209,
                    metric_3: 0.9231,
                    metric_4: 0.6987,
                    metric_5: 0.5232,
                    metric_6: 0.3839,
                    metric_7: 0.6626,
                    metric_8: 0.9881
                },
                method4: {
                    metric_1: 24.39,
                    metric_2: 0.2197,
                    metric_3: 0.8843,
                    metric_4: 0.5899,
                    metric_5: 0.8251,
                    metric_6: 0.5154,
                    metric_7: 0.8931,
                    metric_8: 0.9763
                },
                method5: {
                    metric_1: 24.6445,
                    metric_2: 0.2107,
                    metric_3: 0.9078,
                    metric_4: 0.7916,
                    metric_5: 0.7475,
                    metric_6: 0.4473,
                    metric_7: 0.7856,
                    metric_8: 0.9824
                },
                method6: {
                    metric_1: 26.9166,
                    metric_2: 0.2143,
                    metric_3: 0.8982,
                    metric_4: 0.5954,
                    metric_5: 0.6415,
                    metric_6: 0.3692,
                    metric_7: 0.7109,
                    metric_8: 0.979
                },
                method7: {
                    metric_1: 24.2725,
                    metric_2: 0.2283,
                    metric_3: 0.9265,
                    metric_4: 0.4559,
                    metric_5: 0.5474,
                    metric_6: 0.4241,
                    metric_7: 0.6362,
                    metric_8: 0.9592
                },
                method8: {
                    metric_1: 24.627,
                    metric_2: 0.2154,
                    metric_3: 0.8922,
                    metric_4: 0.5348,
                    metric_5: 0.6892,
                    metric_6: 0.4856,
                    metric_7: 0.7534,
                    metric_8: 0.977
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Sci-fi style",
            targetPrompt: "A man swimming underwater in a swimming pool, depicted in a Sci-fi style",
            resultVideos: {
                method1: "VEditBench-Short/sport activity_0024/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/sport activity_0024/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/sport activity_0024/stylization/flatten.mp4",
                method4: "VEditBench-Short/sport activity_0024/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/sport activity_0024/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/sport activity_0024/stylization/pix2video.mp4",
                method7: "VEditBench-Short/sport activity_0024/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/sport activity_0024/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.8739,
                    metric_2: 0.2141,
                    metric_3: 0.8422,
                    metric_4: 0.3747,
                    metric_5: 0.7206,
                    metric_6: 0.5976,
                    metric_7: 0.7822,
                    metric_8: 0.9883
                },
                method2: {
                    metric_1: 26.1052,
                    metric_2: 0.2076,
                    metric_3: 0.9278,
                    metric_4: 0.5441,
                    metric_5: 0.766,
                    metric_6: 0.4464,
                    metric_7: 0.855,
                    metric_8: 0.981
                },
                method3: {
                    metric_1: 28.7592,
                    metric_2: 0.2425,
                    metric_3: 0.911,
                    metric_4: 0.6429,
                    metric_5: 0.2594,
                    metric_6: 0.2543,
                    metric_7: 0.3955,
                    metric_8: 0.9752
                },
                method4: {
                    metric_1: 25.2351,
                    metric_2: 0.2118,
                    metric_3: 0.9233,
                    metric_4: 0.5862,
                    metric_5: 0.8033,
                    metric_6: 0.5196,
                    metric_7: 0.8877,
                    metric_8: 0.9756
                },
                method5: {
                    metric_1: 26.5161,
                    metric_2: 0.2141,
                    metric_3: 0.9445,
                    metric_4: 0.793,
                    metric_5: 0.6185,
                    metric_6: 0.4674,
                    metric_7: 0.73,
                    metric_8: 0.988
                },
                method6: {
                    metric_1: 28.9758,
                    metric_2: 0.2123,
                    metric_3: 0.91,
                    metric_4: 0.5707,
                    metric_5: 0.643,
                    metric_6: 0.3422,
                    metric_7: 0.7241,
                    metric_8: 0.977
                },
                method7: {
                    metric_1: 28.713,
                    metric_2: 0.235,
                    metric_3: 0.9272,
                    metric_4: 0.4585,
                    metric_5: 0.5742,
                    metric_6: 0.4511,
                    metric_7: 0.666,
                    metric_8: 0.9591
                },
                method8: {
                    metric_1: 26.9282,
                    metric_2: 0.2102,
                    metric_3: 0.901,
                    metric_4: 0.5243,
                    metric_5: 0.7231,
                    metric_6: 0.5105,
                    metric_7: 0.7959,
                    metric_8: 0.9756
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/technology_0007/input.mp4",
    category: "Technology",
    originalCaption: "A man is playing a first person shooting game on a large television screen at an exhibition with a gun shape controller.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the man sitting on a chair while playing.",
            targetPrompt: "A man is sitting on a chair while playing a first-person shooting game on a large television screen at an exhibition with a gun-shaped controller.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0007/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0007/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0007/motion_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0007/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0007/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0007/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0007/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0007/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 30.7179,
                    metric_2: 0.3204,
                    metric_3: 0.9443,
                    metric_4: 0.2823,
                    metric_5: 0.7339,
                    metric_6: 0.3977,
                    metric_7: 0.7349,
                    metric_8: 0.9735
                },
                method2: {
                    metric_1: 29.1389,
                    metric_2: 0.2773,
                    metric_3: 0.9769,
                    metric_4: 0.7077,
                    metric_5: 0.8311,
                    metric_6: 0.4369,
                    metric_7: 0.8105,
                    metric_8: 0.9569
                },
                method3: {
                    metric_1: 30.0082,
                    metric_2: 0.241,
                    metric_3: 0.9799,
                    metric_4: 0.861,
                    metric_5: 0.799,
                    metric_6: 0.3561,
                    metric_7: 0.7593,
                    metric_8: 0.9666
                },
                method4: {
                    metric_1: 27.4759,
                    metric_2: 0.2709,
                    metric_3: 0.9711,
                    metric_4: 0.6849,
                    metric_5: 0.8347,
                    metric_6: 0.4478,
                    metric_7: 0.7964,
                    metric_8: 0.9555
                },
                method5: {
                    metric_1: 29.3658,
                    metric_2: 0.27,
                    metric_3: 0.9777,
                    metric_4: 0.8413,
                    metric_5: 0.8152,
                    metric_6: 0.3842,
                    metric_7: 0.7534,
                    metric_8: 0.9695
                },
                method6: {
                    metric_1: 28.2866,
                    metric_2: 0.2927,
                    metric_3: 0.9666,
                    metric_4: 0.5335,
                    metric_5: 0.5989,
                    metric_6: 0.3555,
                    metric_7: 0.7212,
                    metric_8: 0.9647
                },
                method7: {
                    metric_1: 34.5218,
                    metric_2: 0.2752,
                    metric_3: 0.9403,
                    metric_4: 0.3703,
                    metric_5: 0.5814,
                    metric_6: 0.3072,
                    metric_7: 0.5674,
                    metric_8: 0.9454
                },
                method8: {
                    metric_1: 31.8018,
                    metric_2: 0.2878,
                    metric_3: 0.9565,
                    metric_4: 0.3663,
                    metric_5: 0.6902,
                    metric_6: 0.362,
                    metric_7: 0.6382,
                    metric_8: 0.9424
                }
            }
        },
        'object-change': {
            editPrompt: "Change the gun shape controller to a Xbox controller.",
            targetPrompt: "A man is playing a first person shooting game on a large television screen at an exhibition with an Xbox controller.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0007/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0007/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0007/object_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0007/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0007/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0007/object_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0007/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0007/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 30.0172,
                    metric_2: 0.3235,
                    metric_3: 0.955,
                    metric_4: 0.2694,
                    metric_5: 0.7953,
                    metric_6: 0.5164,
                    metric_7: 0.7681,
                    metric_8: 0.9681
                },
                method2: {
                    metric_1: 29.7262,
                    metric_2: 0.2969,
                    metric_3: 0.9783,
                    metric_4: 0.698,
                    metric_5: 0.8088,
                    metric_6: 0.4134,
                    metric_7: 0.7925,
                    metric_8: 0.9567
                },
                method3: {
                    metric_1: 28.0078,
                    metric_2: 0.2615,
                    metric_3: 0.9718,
                    metric_4: 0.8019,
                    metric_5: 0.8613,
                    metric_6: 0.4395,
                    metric_7: 0.7842,
                    metric_8: 0.9669
                },
                method4: {
                    metric_1: 27.2289,
                    metric_2: 0.2974,
                    metric_3: 0.9728,
                    metric_4: 0.691,
                    metric_5: 0.8176,
                    metric_6: 0.4349,
                    metric_7: 0.791,
                    metric_8: 0.9568
                },
                method5: {
                    metric_1: 28.7585,
                    metric_2: 0.2931,
                    metric_3: 0.98,
                    metric_4: 0.8265,
                    metric_5: 0.7622,
                    metric_6: 0.3806,
                    metric_7: 0.7368,
                    metric_8: 0.9716
                },
                method6: {
                    metric_1: 26.1928,
                    metric_2: 0.2913,
                    metric_3: 0.9612,
                    metric_4: 0.5013,
                    metric_5: 0.612,
                    metric_6: 0.3365,
                    metric_7: 0.7412,
                    metric_8: 0.9623
                },
                method7: {
                    metric_1: 30.2856,
                    metric_2: 0.2714,
                    metric_3: 0.9422,
                    metric_4: 0.3711,
                    metric_5: 0.5132,
                    metric_6: 0.2871,
                    metric_7: 0.5405,
                    metric_8: 0.9493
                },
                method8: {
                    metric_1: 27.045,
                    metric_2: 0.3195,
                    metric_3: 0.916,
                    metric_4: 0.3506,
                    metric_5: 0.6087,
                    metric_6: 0.2943,
                    metric_7: 0.5786,
                    metric_8: 0.9416
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a VR headset on the man's head.",
            targetPrompt: "A man wearing a VR headset is playing a first-person shooting game on a large television screen at an exhibition with a gun-shaped controller.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0007/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0007/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0007/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/technology_0007/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0007/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0007/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/technology_0007/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0007/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 34.1631,
                    metric_2: 0.3407,
                    metric_3: 0.9533,
                    metric_4: 0.2663,
                    metric_5: 0.7438,
                    metric_6: 0.4311,
                    metric_7: 0.7573,
                    metric_8: 0.9739
                },
                method2: {
                    metric_1: 30.5192,
                    metric_2: 0.3031,
                    metric_3: 0.9781,
                    metric_4: 0.7142,
                    metric_5: 0.7348,
                    metric_6: 0.4054,
                    metric_7: 0.7441,
                    metric_8: 0.959
                },
                method3: {
                    metric_1: 28.4871,
                    metric_2: 0.2635,
                    metric_3: 0.974,
                    metric_4: 0.8109,
                    metric_5: 0.7565,
                    metric_6: 0.3917,
                    metric_7: 0.7271,
                    metric_8: 0.9664
                },
                method4: {
                    metric_1: 29.003,
                    metric_2: 0.304,
                    metric_3: 0.9749,
                    metric_4: 0.6965,
                    metric_5: 0.7622,
                    metric_6: 0.4442,
                    metric_7: 0.7598,
                    metric_8: 0.9576
                },
                method5: {
                    metric_1: 31.5497,
                    metric_2: 0.2946,
                    metric_3: 0.9755,
                    metric_4: 0.8105,
                    metric_5: 0.8016,
                    metric_6: 0.3933,
                    metric_7: 0.749,
                    metric_8: 0.9684
                },
                method6: {
                    metric_1: 30.679,
                    metric_2: 0.3277,
                    metric_3: 0.9569,
                    metric_4: 0.5015,
                    metric_5: 0.6891,
                    metric_6: 0.4344,
                    metric_7: 0.791,
                    metric_8: 0.9658
                },
                method7: {
                    metric_1: 33.1527,
                    metric_2: 0.2609,
                    metric_3: 0.9344,
                    metric_4: 0.371,
                    metric_5: 0.6069,
                    metric_6: 0.347,
                    metric_7: 0.6626,
                    metric_8: 0.9535
                },
                method8: {
                    metric_1: 34.0038,
                    metric_2: 0.3202,
                    metric_3: 0.9605,
                    metric_4: 0.3965,
                    metric_5: 0.698,
                    metric_6: 0.3736,
                    metric_7: 0.6514,
                    metric_8: 0.9451
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the gun shape controller.",
            targetPrompt: "A man is watching a first person shooting game on a large television screen at an exhibition.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0007/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0007/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0007/object_removal/flatten.mp4",
                method4: "VEditBench-Short/technology_0007/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0007/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0007/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/technology_0007/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0007/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 30.1948,
                    metric_2: 0.2965,
                    metric_3: 0.9577,
                    metric_4: 0.2792,
                    metric_5: 0.7237,
                    metric_6: 0.3605,
                    metric_7: 0.7168,
                    metric_8: 0.9752
                },
                method2: {
                    metric_1: 29.9807,
                    metric_2: 0.2907,
                    metric_3: 0.9779,
                    metric_4: 0.7193,
                    metric_5: 0.7585,
                    metric_6: 0.3923,
                    metric_7: 0.7524,
                    metric_8: 0.9582
                },
                method3: {
                    metric_1: 26.6539,
                    metric_2: 0.2254,
                    metric_3: 0.9703,
                    metric_4: 0.6646,
                    metric_5: 0.2539,
                    metric_6: 0.2091,
                    metric_7: 0.311,
                    metric_8: 0.9793
                },
                method4: {
                    metric_1: 28.629,
                    metric_2: 0.2845,
                    metric_3: 0.9735,
                    metric_4: 0.6993,
                    metric_5: 0.7992,
                    metric_6: 0.4129,
                    metric_7: 0.7734,
                    metric_8: 0.9586
                },
                method5: {
                    metric_1: 27.5952,
                    metric_2: 0.2777,
                    metric_3: 0.9822,
                    metric_4: 0.8624,
                    metric_5: 0.8314,
                    metric_6: 0.3939,
                    metric_7: 0.7607,
                    metric_8: 0.9684
                },
                method6: {
                    metric_1: 30.8071,
                    metric_2: 0.3209,
                    metric_3: 0.9628,
                    metric_4: 0.498,
                    metric_5: 0.4524,
                    metric_6: 0.2661,
                    metric_7: 0.5869,
                    metric_8: 0.9651
                },
                method7: {
                    metric_1: 30.9166,
                    metric_2: 0.2965,
                    metric_3: 0.9492,
                    metric_4: 0.3268,
                    metric_5: 0.5484,
                    metric_6: 0.2915,
                    metric_7: 0.5708,
                    metric_8: 0.9445
                },
                method8: {
                    metric_1: 30.5379,
                    metric_2: 0.2755,
                    metric_3: 0.9535,
                    metric_4: 0.3908,
                    metric_5: 0.6906,
                    metric_6: 0.3607,
                    metric_7: 0.667,
                    metric_8: 0.95
                }
            }
        },
        'scene-change': {
            editPrompt: "Make the scene in a home living room.",
            targetPrompt: "A man is playing a first-person shooting game on a large television screen in a home living room with a gun-shaped controller.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0007/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0007/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0007/scene_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0007/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0007/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0007/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0007/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0007/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 32.6246,
                    metric_2: 0.2961,
                    metric_3: 0.9481,
                    metric_4: 0.2828,
                    metric_5: 0.7793,
                    metric_6: 0.4816,
                    metric_7: 0.7705,
                    metric_8: 0.974
                },
                method2: {
                    metric_1: 30.8606,
                    metric_2: 0.2439,
                    metric_3: 0.9746,
                    metric_4: 0.7149,
                    metric_5: 0.6882,
                    metric_6: 0.3862,
                    metric_7: 0.7139,
                    metric_8: 0.9663
                },
                method3: {
                    metric_1: 27.1551,
                    metric_2: 0.2455,
                    metric_3: 0.9694,
                    metric_4: 0.6579,
                    metric_5: 0.5679,
                    metric_6: 0.4456,
                    metric_7: 0.5352,
                    metric_8: 0.9695
                },
                method4: {
                    metric_1: 31.5292,
                    metric_2: 0.2545,
                    metric_3: 0.9724,
                    metric_4: 0.72,
                    metric_5: 0.7661,
                    metric_6: 0.414,
                    metric_7: 0.7466,
                    metric_8: 0.961
                },
                method5: {
                    metric_1: 29.5602,
                    metric_2: 0.2378,
                    metric_3: 0.9815,
                    metric_4: 0.8079,
                    metric_5: 0.8114,
                    metric_6: 0.3764,
                    metric_7: 0.7603,
                    metric_8: 0.9693
                },
                method6: {
                    metric_1: 32.4443,
                    metric_2: 0.2983,
                    metric_3: 0.9473,
                    metric_4: 0.4925,
                    metric_5: 0.3909,
                    metric_6: 0.2159,
                    metric_7: 0.4609,
                    metric_8: 0.9676
                },
                method7: {
                    metric_1: 30.5263,
                    metric_2: 0.1991,
                    metric_3: 0.9176,
                    metric_4: 0.3291,
                    metric_5: 0.4718,
                    metric_6: 0.2524,
                    metric_7: 0.4675,
                    metric_8: 0.9453
                },
                method8: {
                    metric_1: 29.8731,
                    metric_2: 0.2315,
                    metric_3: 0.9376,
                    metric_4: 0.3572,
                    metric_5: 0.7693,
                    metric_6: 0.3684,
                    metric_7: 0.7217,
                    metric_8: 0.9602
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Cybernetic style",
            targetPrompt: "A man is playing a first person shooting game on a large television screen at an exhibition with a gun shape controller, depicted in a Cybernetic style",
            resultVideos: {
                method1: "VEditBench-Short/technology_0007/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0007/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0007/stylization/flatten.mp4",
                method4: "VEditBench-Short/technology_0007/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0007/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0007/stylization/pix2video.mp4",
                method7: "VEditBench-Short/technology_0007/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0007/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 32.7071,
                    metric_2: 0.3304,
                    metric_3: 0.9591,
                    metric_4: 0.2677,
                    metric_5: 0.7246,
                    metric_6: 0.4854,
                    metric_7: 0.7163,
                    metric_8: 0.9753
                },
                method2: {
                    metric_1: 31.2149,
                    metric_2: 0.2713,
                    metric_3: 0.975,
                    metric_4: 0.7006,
                    metric_5: 0.6088,
                    metric_6: 0.3289,
                    metric_7: 0.667,
                    metric_8: 0.9579
                },
                method3: {
                    metric_1: 27.0985,
                    metric_2: 0.2871,
                    metric_3: 0.9761,
                    metric_4: 0.7808,
                    metric_5: 0.7513,
                    metric_6: 0.512,
                    metric_7: 0.7241,
                    metric_8: 0.9691
                },
                method4: {
                    metric_1: 29.9517,
                    metric_2: 0.2797,
                    metric_3: 0.9719,
                    metric_4: 0.6819,
                    metric_5: 0.7575,
                    metric_6: 0.4176,
                    metric_7: 0.7617,
                    metric_8: 0.9565
                },
                method5: {
                    metric_1: 31.2562,
                    metric_2: 0.2635,
                    metric_3: 0.982,
                    metric_4: 0.7683,
                    metric_5: 0.8319,
                    metric_6: 0.4103,
                    metric_7: 0.7661,
                    metric_8: 0.969
                },
                method6: {
                    metric_1: 31.4276,
                    metric_2: 0.3038,
                    metric_3: 0.9577,
                    metric_4: 0.5126,
                    metric_5: 0.541,
                    metric_6: 0.2995,
                    metric_7: 0.7036,
                    metric_8: 0.9643
                },
                method7: {
                    metric_1: 34.0539,
                    metric_2: 0.2661,
                    metric_3: 0.9499,
                    metric_4: 0.3502,
                    metric_5: 0.466,
                    metric_6: 0.2505,
                    metric_7: 0.4983,
                    metric_8: 0.9492
                },
                method8: {
                    metric_1: 32.0113,
                    metric_2: 0.3164,
                    metric_3: 0.929,
                    metric_4: 0.3474,
                    metric_5: 0.6925,
                    metric_6: 0.3908,
                    metric_7: 0.6255,
                    metric_8: 0.9441
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/technology_0017/input.mp4",
    category: "Technology",
    originalCaption: "A close look of a black drone hovering in the sky.",
    editTypes: {
        'motion-change': {
            editPrompt: "Show the drone flying instead of hovering.",
            targetPrompt: "Show a close look of a black drone flying in the sky.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0017/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0017/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0017/motion_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0017/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0017/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0017/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0017/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0017/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.8626,
                    metric_2: 0.2513,
                    metric_3: 0.8851,
                    metric_4: 0.8067,
                    metric_5: 0.6857,
                    metric_6: 0.401,
                    metric_7: 0.7451,
                    metric_8: 0.9885
                },
                method2: {
                    metric_1: 25.1119,
                    metric_2: 0.252,
                    metric_3: 0.8655,
                    metric_4: 0.9491,
                    metric_5: 0.7769,
                    metric_6: 0.4053,
                    metric_7: 0.7686,
                    metric_8: 0.9886
                },
                method3: {
                    metric_1: 24.2454,
                    metric_2: 0.2494,
                    metric_3: 0.9393,
                    metric_4: 0.9696,
                    metric_5: 0.4368,
                    metric_6: 0.238,
                    metric_7: 0.5063,
                    metric_8: 0.9889
                },
                method4: {
                    metric_1: 23.5939,
                    metric_2: 0.2484,
                    metric_3: -1.0,
                    metric_4: 0.9059,
                    metric_5: 0.7186,
                    metric_6: 0.394,
                    metric_7: 0.7305,
                    metric_8: 0.9886
                },
                method5: {
                    metric_1: 23.7803,
                    metric_2: 0.227,
                    metric_3: 0.8523,
                    metric_4: 0.7955,
                    metric_5: 0.5222,
                    metric_6: 0.4213,
                    metric_7: 0.6748,
                    metric_8: 0.9885
                },
                method6: {
                    metric_1: 26.0607,
                    metric_2: 0.2711,
                    metric_3: 0.8437,
                    metric_4: 0.8127,
                    metric_5: 0.4962,
                    metric_6: 0.3078,
                    metric_7: 0.4761,
                    metric_8: 0.9873
                },
                method7: {
                    metric_1: 25.5188,
                    metric_2: 0.2512,
                    metric_3: 0.8464,
                    metric_4: 0.8785,
                    metric_5: 0.6439,
                    metric_6: 0.3641,
                    metric_7: 0.6367,
                    metric_8: 0.9847
                },
                method8: {
                    metric_1: 24.5247,
                    metric_2: 0.2688,
                    metric_3: 0.8863,
                    metric_4: 0.8438,
                    metric_5: 0.5892,
                    metric_6: 0.3705,
                    metric_7: 0.6118,
                    metric_8: 0.9773
                }
            }
        },
        'object-change': {
            editPrompt: "Change the drone to a kite.",
            targetPrompt: "A close look of a black kite hovering in the sky.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0017/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0017/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0017/object_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0017/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0017/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0017/object_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0017/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0017/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.0149,
                    metric_2: 0.257,
                    metric_3: 0.9108,
                    metric_4: 0.8499,
                    metric_5: 0.7047,
                    metric_6: 0.3658,
                    metric_7: 0.7402,
                    metric_8: 0.9934
                },
                method2: {
                    metric_1: 25.135,
                    metric_2: 0.27,
                    metric_3: 0.8738,
                    metric_4: 0.9042,
                    metric_5: 0.7137,
                    metric_6: 0.4946,
                    metric_7: 0.7964,
                    metric_8: 0.9885
                },
                method3: {
                    metric_1: 25.2878,
                    metric_2: 0.2457,
                    metric_3: 0.8625,
                    metric_4: 0.8085,
                    metric_5: 0.7653,
                    metric_6: 0.5993,
                    metric_7: 0.7329,
                    metric_8: 0.9672
                },
                method4: {
                    metric_1: 24.9117,
                    metric_2: 0.2479,
                    metric_3: -1.0,
                    metric_4: 0.88,
                    metric_5: 0.6997,
                    metric_6: 0.5173,
                    metric_7: 0.7339,
                    metric_8: 0.9885
                },
                method5: {
                    metric_1: 15.9048,
                    metric_2: 0.131,
                    metric_3: 0.8258,
                    metric_4: 0.8959,
                    metric_5: 0.6849,
                    metric_6: 0.4151,
                    metric_7: 0.752,
                    metric_8: 0.9907
                },
                method6: {
                    metric_1: 23.0658,
                    metric_2: 0.208,
                    metric_3: 0.8678,
                    metric_4: 0.8612,
                    metric_5: 0.2846,
                    metric_6: 0.1873,
                    metric_7: 0.4783,
                    metric_8: 0.9913
                },
                method7: {
                    metric_1: 27.4125,
                    metric_2: 0.2219,
                    metric_3: 0.8259,
                    metric_4: 0.7816,
                    metric_5: 0.8925,
                    metric_6: 0.5302,
                    metric_7: 0.8745,
                    metric_8: 0.9524
                },
                method8: {
                    metric_1: 27.015,
                    metric_2: 0.2493,
                    metric_3: 0.8933,
                    metric_4: 0.8596,
                    metric_5: 0.5415,
                    metric_6: 0.2391,
                    metric_7: 0.5869,
                    metric_8: 0.9736
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a brid standing on the drone.",
            targetPrompt: "A close look of a black drone hovering in the sky with a bird standing on it.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0017/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0017/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0017/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/technology_0017/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0017/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0017/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/technology_0017/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0017/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.3198,
                    metric_2: 0.2275,
                    metric_3: 0.8861,
                    metric_4: 0.8015,
                    metric_5: 0.8865,
                    metric_6: 0.4041,
                    metric_7: 0.8179,
                    metric_8: 0.9886
                },
                method2: {
                    metric_1: 24.5654,
                    metric_2: 0.2188,
                    metric_3: 0.8823,
                    metric_4: 0.9521,
                    metric_5: 0.8133,
                    metric_6: 0.4141,
                    metric_7: 0.7832,
                    metric_8: 0.9879
                },
                method3: {
                    metric_1: 24.7416,
                    metric_2: 0.2278,
                    metric_3: 0.9458,
                    metric_4: 0.969,
                    metric_5: 0.4814,
                    metric_6: 0.2515,
                    metric_7: 0.5552,
                    metric_8: 0.9875
                },
                method4: {
                    metric_1: 23.4795,
                    metric_2: 0.2153,
                    metric_3: -1.0,
                    metric_4: 0.9059,
                    metric_5: 0.7832,
                    metric_6: 0.4408,
                    metric_7: 0.7617,
                    metric_8: 0.9879
                },
                method5: {
                    metric_1: 22.8399,
                    metric_2: 0.2245,
                    metric_3: 0.9349,
                    metric_4: 0.9539,
                    metric_5: 0.7361,
                    metric_6: 0.4681,
                    metric_7: 0.7363,
                    metric_8: 0.9892
                },
                method6: {
                    metric_1: 24.7258,
                    metric_2: 0.2358,
                    metric_3: 0.8493,
                    metric_4: 0.8336,
                    metric_5: 0.4715,
                    metric_6: 0.2877,
                    metric_7: 0.4951,
                    metric_8: 0.9846
                },
                method7: {
                    metric_1: 25.228,
                    metric_2: 0.2203,
                    metric_3: 0.8681,
                    metric_4: 0.8753,
                    metric_5: 0.562,
                    metric_6: 0.3304,
                    metric_7: 0.6426,
                    metric_8: 0.9851
                },
                method8: {
                    metric_1: 24.1799,
                    metric_2: 0.2386,
                    metric_3: 0.8921,
                    metric_4: 0.8418,
                    metric_5: 0.6023,
                    metric_6: 0.3169,
                    metric_7: 0.6113,
                    metric_8: 0.9774
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the propeller of the drone.",
            targetPrompt: "A close look at a black drone with not propeller hovering in the sky.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0017/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0017/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0017/object_removal/flatten.mp4",
                method4: "VEditBench-Short/technology_0017/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0017/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0017/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/technology_0017/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0017/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.9336,
                    metric_2: 0.2718,
                    metric_3: 0.8758,
                    metric_4: 0.7799,
                    metric_5: 0.7733,
                    metric_6: 0.4517,
                    metric_7: 0.8022,
                    metric_8: 0.986
                },
                method2: {
                    metric_1: 27.052,
                    metric_2: 0.2554,
                    metric_3: 0.8791,
                    metric_4: 0.9486,
                    metric_5: 0.8108,
                    metric_6: 0.4287,
                    metric_7: 0.7964,
                    metric_8: 0.9884
                },
                method3: {
                    metric_1: 26.3313,
                    metric_2: 0.2717,
                    metric_3: 0.9191,
                    metric_4: 0.9585,
                    metric_5: 0.645,
                    metric_6: 0.3228,
                    metric_7: 0.7417,
                    metric_8: 0.9878
                },
                method4: {
                    metric_1: 25.2601,
                    metric_2: 0.2585,
                    metric_3: -1.0,
                    metric_4: 0.9068,
                    metric_5: 0.7978,
                    metric_6: 0.4431,
                    metric_7: 0.751,
                    metric_8: 0.9884
                },
                method5: {
                    metric_1: 24.8527,
                    metric_2: 0.2345,
                    metric_3: 0.851,
                    metric_4: 0.8171,
                    metric_5: 0.4284,
                    metric_6: 0.3104,
                    metric_7: 0.5283,
                    metric_8: 0.9907
                },
                method6: {
                    metric_1: 27.4027,
                    metric_2: 0.2699,
                    metric_3: 0.8585,
                    metric_4: 0.8343,
                    metric_5: 0.5477,
                    metric_6: 0.3449,
                    metric_7: 0.5371,
                    metric_8: 0.9855
                },
                method7: {
                    metric_1: 26.9397,
                    metric_2: 0.2589,
                    metric_3: 0.8754,
                    metric_4: 0.8624,
                    metric_5: 0.7048,
                    metric_6: 0.3798,
                    metric_7: 0.6904,
                    metric_8: 0.9833
                },
                method8: {
                    metric_1: 26.7959,
                    metric_2: 0.2722,
                    metric_3: 0.88,
                    metric_4: 0.833,
                    metric_5: 0.6094,
                    metric_6: 0.3889,
                    metric_7: 0.6587,
                    metric_8: 0.9804
                }
            }
        },
        'scene-change': {
            editPrompt: "Place the drone inside a large indoor stadium.",
            targetPrompt: "A close look of a black drone hovering inside a large indoor stadium.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0017/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0017/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0017/scene_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0017/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0017/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0017/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0017/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0017/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.4293,
                    metric_2: 0.1532,
                    metric_3: 0.8756,
                    metric_4: 0.7895,
                    metric_5: 0.7992,
                    metric_6: 0.4807,
                    metric_7: 0.7935,
                    metric_8: 0.9871
                },
                method2: {
                    metric_1: 25.6327,
                    metric_2: 0.2042,
                    metric_3: 0.8779,
                    metric_4: 0.9192,
                    metric_5: 0.6609,
                    metric_6: 0.343,
                    metric_7: 0.7241,
                    metric_8: 0.9861
                },
                method3: {
                    metric_1: 27.8747,
                    metric_2: 0.2775,
                    metric_3: 0.9268,
                    metric_4: 0.4489,
                    metric_5: 0.4801,
                    metric_6: 0.3278,
                    metric_7: 0.4753,
                    metric_8: 0.9101
                },
                method4: {
                    metric_1: 24.443,
                    metric_2: 0.2074,
                    metric_3: -1.0,
                    metric_4: 0.8925,
                    metric_5: 0.6783,
                    metric_6: 0.4054,
                    metric_7: 0.7163,
                    metric_8: 0.9861
                },
                method5: {
                    metric_1: 27.5263,
                    metric_2: 0.2788,
                    metric_3: 0.8847,
                    metric_4: 0.8062,
                    metric_5: 0.4391,
                    metric_6: 0.2692,
                    metric_7: 0.6426,
                    metric_8: 0.9893
                },
                method6: {
                    metric_1: 27.7577,
                    metric_2: 0.2974,
                    metric_3: 0.8854,
                    metric_4: 0.7211,
                    metric_5: 0.4488,
                    metric_6: 0.3541,
                    metric_7: 0.5591,
                    metric_8: 0.9755
                },
                method7: {
                    metric_1: 23.7599,
                    metric_2: 0.1837,
                    metric_3: 0.852,
                    metric_4: 0.8577,
                    metric_5: 0.5721,
                    metric_6: 0.356,
                    metric_7: 0.5957,
                    metric_8: 0.9827
                },
                method8: {
                    metric_1: 24.959,
                    metric_2: 0.2222,
                    metric_3: 0.88,
                    metric_4: 0.8054,
                    metric_5: 0.6053,
                    metric_6: 0.3971,
                    metric_7: 0.6113,
                    metric_8: 0.9774
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Art Deco style",
            targetPrompt: "A close look of a black drone hovering in the sky, depicted in a Art Deco style",
            resultVideos: {
                method1: "VEditBench-Short/technology_0017/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0017/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0017/stylization/flatten.mp4",
                method4: "VEditBench-Short/technology_0017/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0017/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0017/stylization/pix2video.mp4",
                method7: "VEditBench-Short/technology_0017/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0017/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.3972,
                    metric_2: 0.2347,
                    metric_3: 0.873,
                    metric_4: 0.7889,
                    metric_5: 0.6854,
                    metric_6: 0.3992,
                    metric_7: 0.7144,
                    metric_8: 0.9886
                },
                method2: {
                    metric_1: 24.6006,
                    metric_2: 0.2301,
                    metric_3: 0.8733,
                    metric_4: 0.9574,
                    metric_5: 0.8137,
                    metric_6: 0.3964,
                    metric_7: 0.8003,
                    metric_8: 0.9891
                },
                method3: {
                    metric_1: 26.4902,
                    metric_2: 0.2125,
                    metric_3: 0.9077,
                    metric_4: 0.9155,
                    metric_5: 0.4889,
                    metric_6: 0.3044,
                    metric_7: 0.5474,
                    metric_8: 0.9863
                },
                method4: {
                    metric_1: 23.8326,
                    metric_2: 0.2197,
                    metric_3: -1.0,
                    metric_4: 0.9171,
                    metric_5: 0.7599,
                    metric_6: 0.3933,
                    metric_7: 0.7466,
                    metric_8: 0.9891
                },
                method5: {
                    metric_1: 26.5791,
                    metric_2: 0.2175,
                    metric_3: 0.8693,
                    metric_4: 0.931,
                    metric_5: 0.4928,
                    metric_6: 0.2557,
                    metric_7: 0.5762,
                    metric_8: 0.9911
                },
                method6: {
                    metric_1: 27.2767,
                    metric_2: 0.2392,
                    metric_3: 0.8759,
                    metric_4: 0.8063,
                    metric_5: 0.47,
                    metric_6: 0.3809,
                    metric_7: 0.6104,
                    metric_8: 0.987
                },
                method7: {
                    metric_1: 24.855,
                    metric_2: 0.2201,
                    metric_3: 0.8779,
                    metric_4: 0.8922,
                    metric_5: 0.6375,
                    metric_6: 0.3629,
                    metric_7: 0.707,
                    metric_8: 0.9868
                },
                method8: {
                    metric_1: 24.3522,
                    metric_2: 0.2453,
                    metric_3: 0.8836,
                    metric_4: 0.8204,
                    metric_5: 0.6302,
                    metric_6: 0.3764,
                    metric_7: 0.6611,
                    metric_8: 0.9747
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/technology_0023/input.mp4",
    category: "Technology",
    originalCaption: "A young man unlock a iphone to homepage, and there is another iphone with black screen beside.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the young man holding both iPhones.",
            targetPrompt: "A young man unlocks an iPhone to the homepage with the other hand holding another iPhone with the black screen.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0023/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0023/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0023/motion_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0023/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0023/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0023/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0023/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0023/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 21.5966,
                    metric_2: 0.1558,
                    metric_3: 0.8868,
                    metric_4: 0.7041,
                    metric_5: 0.8237,
                    metric_6: 0.432,
                    metric_7: 0.8545,
                    metric_8: 0.9873
                },
                method2: {
                    metric_1: 23.4445,
                    metric_2: 0.1871,
                    metric_3: 0.9199,
                    metric_4: 0.9171,
                    metric_5: 0.8291,
                    metric_6: 0.4043,
                    metric_7: 0.873,
                    metric_8: 0.9841
                },
                method3: {
                    metric_1: 23.0535,
                    metric_2: 0.1827,
                    metric_3: 0.9108,
                    metric_4: 0.9464,
                    metric_5: 0.7912,
                    metric_6: 0.3738,
                    metric_7: 0.8345,
                    metric_8: 0.9848
                },
                method4: {
                    metric_1: 23.955,
                    metric_2: 0.1895,
                    metric_3: 0.9293,
                    metric_4: 0.893,
                    metric_5: 0.9396,
                    metric_6: 0.4474,
                    metric_7: 0.9341,
                    metric_8: 0.9856
                },
                method5: {
                    metric_1: 23.3678,
                    metric_2: 0.1786,
                    metric_3: 0.9482,
                    metric_4: 0.943,
                    metric_5: 0.8604,
                    metric_6: 0.4059,
                    metric_7: 0.8184,
                    metric_8: 0.9851
                },
                method6: {
                    metric_1: 22.2581,
                    metric_2: 0.1836,
                    metric_3: 0.9151,
                    metric_4: 0.7584,
                    metric_5: 0.873,
                    metric_6: 0.4521,
                    metric_7: 0.9102,
                    metric_8: 0.9798
                },
                method7: {
                    metric_1: 23.1776,
                    metric_2: 0.1601,
                    metric_3: 0.8974,
                    metric_4: 0.7175,
                    metric_5: 0.5354,
                    metric_6: 0.2827,
                    metric_7: 0.5645,
                    metric_8: 0.976
                },
                method8: {
                    metric_1: 26.0033,
                    metric_2: 0.2096,
                    metric_3: 0.9227,
                    metric_4: 0.6925,
                    metric_5: 0.8211,
                    metric_6: 0.4185,
                    metric_7: 0.7988,
                    metric_8: 0.9778
                }
            }
        },
        'object-change': {
            editPrompt: "Change the iPhones to Android phones.",
            targetPrompt: "A young man unlocks an Android phone to the homepage, and there is another Android phone with a black screen beside.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0023/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0023/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0023/object_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0023/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0023/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0023/object_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0023/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0023/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.595,
                    metric_2: 0.1797,
                    metric_3: 0.8852,
                    metric_4: 0.6686,
                    metric_5: 0.8422,
                    metric_6: 0.3555,
                    metric_7: 0.8184,
                    metric_8: 0.9869
                },
                method2: {
                    metric_1: 24.3499,
                    metric_2: 0.1687,
                    metric_3: 0.9231,
                    metric_4: 0.8987,
                    metric_5: 0.7197,
                    metric_6: 0.3539,
                    metric_7: 0.8325,
                    metric_8: 0.9833
                },
                method3: {
                    metric_1: 22.6562,
                    metric_2: 0.1496,
                    metric_3: 0.9247,
                    metric_4: 0.9083,
                    metric_5: 0.8036,
                    metric_6: 0.452,
                    metric_7: 0.8232,
                    metric_8: 0.9819
                },
                method4: {
                    metric_1: 24.253,
                    metric_2: 0.1886,
                    metric_3: 0.9188,
                    metric_4: 0.8869,
                    metric_5: 0.9374,
                    metric_6: 0.4928,
                    metric_7: 0.9316,
                    metric_8: 0.9857
                },
                method5: {
                    metric_1: 24.6452,
                    metric_2: 0.162,
                    metric_3: 0.9501,
                    metric_4: 0.912,
                    metric_5: 0.8081,
                    metric_6: 0.3737,
                    metric_7: 0.8062,
                    metric_8: 0.9852
                },
                method6: {
                    metric_1: 23.5925,
                    metric_2: 0.172,
                    metric_3: 0.9074,
                    metric_4: 0.7186,
                    metric_5: 0.8391,
                    metric_6: 0.4632,
                    metric_7: 0.8862,
                    metric_8: 0.9781
                },
                method7: {
                    metric_1: 24.7407,
                    metric_2: 0.165,
                    metric_3: 0.9136,
                    metric_4: 0.6893,
                    metric_5: 0.6623,
                    metric_6: 0.3913,
                    metric_7: 0.6831,
                    metric_8: 0.9776
                },
                method8: {
                    metric_1: 24.9349,
                    metric_2: 0.1768,
                    metric_3: 0.8982,
                    metric_4: 0.6055,
                    metric_5: 0.8081,
                    metric_6: 0.4532,
                    metric_7: 0.7812,
                    metric_8: 0.9817
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a coffee mug next to the iPhones.",
            targetPrompt: "A young man unlocks an iPhone to the homepage, with another iPhone with a black screen beside it, and a coffee mug next to the iPhones.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0023/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0023/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0023/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/technology_0023/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0023/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0023/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/technology_0023/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0023/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.2699,
                    metric_2: 0.1944,
                    metric_3: 0.8734,
                    metric_4: 0.6709,
                    metric_5: 0.8528,
                    metric_6: 0.4296,
                    metric_7: 0.8965,
                    metric_8: 0.9859
                },
                method2: {
                    metric_1: 25.2294,
                    metric_2: 0.175,
                    metric_3: 0.9252,
                    metric_4: 0.9033,
                    metric_5: 0.7489,
                    metric_6: 0.3843,
                    metric_7: 0.8564,
                    metric_8: 0.983
                },
                method3: {
                    metric_1: 23.5335,
                    metric_2: 0.1738,
                    metric_3: 0.9161,
                    metric_4: 0.9213,
                    metric_5: 0.7664,
                    metric_6: 0.413,
                    metric_7: 0.8584,
                    metric_8: 0.9768
                },
                method4: {
                    metric_1: 25.2412,
                    metric_2: 0.1786,
                    metric_3: 0.935,
                    metric_4: 0.8843,
                    metric_5: 0.9367,
                    metric_6: 0.4525,
                    metric_7: 0.9414,
                    metric_8: 0.9856
                },
                method5: {
                    metric_1: 25.7424,
                    metric_2: 0.1708,
                    metric_3: 0.9461,
                    metric_4: 0.891,
                    metric_5: 0.8627,
                    metric_6: 0.4089,
                    metric_7: 0.8247,
                    metric_8: 0.984
                },
                method6: {
                    metric_1: 25.0396,
                    metric_2: 0.1809,
                    metric_3: 0.9036,
                    metric_4: 0.672,
                    metric_5: 0.7893,
                    metric_6: 0.4856,
                    metric_7: 0.8521,
                    metric_8: 0.9776
                },
                method7: {
                    metric_1: 27.1456,
                    metric_2: 0.1683,
                    metric_3: 0.878,
                    metric_4: 0.6921,
                    metric_5: 0.5461,
                    metric_6: 0.2557,
                    metric_7: 0.5845,
                    metric_8: 0.9739
                },
                method8: {
                    metric_1: 25.9156,
                    metric_2: 0.1918,
                    metric_3: 0.8717,
                    metric_4: 0.6438,
                    metric_5: 0.8215,
                    metric_6: 0.4321,
                    metric_7: 0.8018,
                    metric_8: 0.9801
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the iPhone with the black screen.",
            targetPrompt: "A young man unlocks an iPhone to the homepage.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0023/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0023/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0023/object_removal/flatten.mp4",
                method4: "VEditBench-Short/technology_0023/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0023/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0023/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/technology_0023/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0023/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 21.6817,
                    metric_2: 0.1519,
                    metric_3: 0.8861,
                    metric_4: 0.7228,
                    metric_5: 0.8466,
                    metric_6: 0.4177,
                    metric_7: 0.8232,
                    metric_8: 0.9863
                },
                method2: {
                    metric_1: 21.4759,
                    metric_2: 0.1615,
                    metric_3: 0.9075,
                    metric_4: 0.9255,
                    metric_5: 0.8153,
                    metric_6: 0.4251,
                    metric_7: 0.8745,
                    metric_8: 0.9845
                },
                method3: {
                    metric_1: 22.3488,
                    metric_2: 0.1557,
                    metric_3: 0.9091,
                    metric_4: 0.9011,
                    metric_5: 0.4993,
                    metric_6: 0.2281,
                    metric_7: 0.644,
                    metric_8: 0.9849
                },
                method4: {
                    metric_1: 22.507,
                    metric_2: 0.1645,
                    metric_3: 0.9114,
                    metric_4: 0.9002,
                    metric_5: 0.9389,
                    metric_6: 0.4585,
                    metric_7: 0.9351,
                    metric_8: 0.9863
                },
                method5: {
                    metric_1: 22.5544,
                    metric_2: 0.1535,
                    metric_3: 0.9442,
                    metric_4: 0.8622,
                    metric_5: 0.811,
                    metric_6: 0.4154,
                    metric_7: 0.7988,
                    metric_8: 0.986
                },
                method6: {
                    metric_1: 21.1271,
                    metric_2: 0.1575,
                    metric_3: 0.8994,
                    metric_4: 0.777,
                    metric_5: 0.7886,
                    metric_6: 0.4376,
                    metric_7: 0.8467,
                    metric_8: 0.979
                },
                method7: {
                    metric_1: 21.4834,
                    metric_2: 0.1473,
                    metric_3: 0.8995,
                    metric_4: 0.7219,
                    metric_5: 0.5721,
                    metric_6: 0.3172,
                    metric_7: 0.6401,
                    metric_8: 0.9702
                },
                method8: {
                    metric_1: 23.7521,
                    metric_2: 0.1497,
                    metric_3: 0.9303,
                    metric_4: 0.6253,
                    metric_5: 0.8079,
                    metric_6: 0.4299,
                    metric_7: 0.7783,
                    metric_8: 0.9778
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a coffee shop.",
            targetPrompt: "In a coffee shop, a young man unlocks an iPhone to the homepage, with another iPhone with a black screen beside him.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0023/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0023/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0023/scene_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0023/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0023/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0023/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0023/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0023/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 20.4282,
                    metric_2: 0.1697,
                    metric_3: 0.887,
                    metric_4: 0.6501,
                    metric_5: 0.8663,
                    metric_6: 0.4355,
                    metric_7: 0.8857,
                    metric_8: 0.9826
                },
                method2: {
                    metric_1: 20.9205,
                    metric_2: 0.169,
                    metric_3: 0.9342,
                    metric_4: 0.8712,
                    metric_5: 0.7262,
                    metric_6: 0.3578,
                    metric_7: 0.811,
                    metric_8: 0.9822
                },
                method3: {
                    metric_1: 20.5715,
                    metric_2: 0.2034,
                    metric_3: 0.9424,
                    metric_4: 0.774,
                    metric_5: 0.4501,
                    metric_6: 0.2319,
                    metric_7: 0.5586,
                    metric_8: 0.9661
                },
                method4: {
                    metric_1: 20.5004,
                    metric_2: 0.181,
                    metric_3: 0.9394,
                    metric_4: 0.8726,
                    metric_5: 0.9026,
                    metric_6: 0.4513,
                    metric_7: 0.915,
                    metric_8: 0.9845
                },
                method5: {
                    metric_1: 21.5755,
                    metric_2: 0.2058,
                    metric_3: 0.9403,
                    metric_4: 0.7782,
                    metric_5: 0.7726,
                    metric_6: 0.4196,
                    metric_7: 0.7935,
                    metric_8: 0.9842
                },
                method6: {
                    metric_1: 19.3189,
                    metric_2: 0.1834,
                    metric_3: 0.9215,
                    metric_4: 0.7216,
                    metric_5: 0.8097,
                    metric_6: 0.4706,
                    metric_7: 0.8467,
                    metric_8: 0.9767
                },
                method7: {
                    metric_1: 21.3803,
                    metric_2: 0.1619,
                    metric_3: 0.9052,
                    metric_4: 0.703,
                    metric_5: 0.6358,
                    metric_6: 0.2925,
                    metric_7: 0.667,
                    metric_8: 0.9762
                },
                method8: {
                    metric_1: 23.7338,
                    metric_2: 0.1796,
                    metric_3: 0.9289,
                    metric_4: 0.5382,
                    metric_5: 0.8238,
                    metric_6: 0.4528,
                    metric_7: 0.8159,
                    metric_8: 0.9755
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Vintage style",
            targetPrompt: "A young man unlock a iphone to homepage, and there is another iphone with black screen beside, depicted in a Vintage style",
            resultVideos: {
                method1: "VEditBench-Short/technology_0023/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0023/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0023/stylization/flatten.mp4",
                method4: "VEditBench-Short/technology_0023/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0023/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0023/stylization/pix2video.mp4",
                method7: "VEditBench-Short/technology_0023/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0023/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.853,
                    metric_2: 0.1468,
                    metric_3: 0.866,
                    metric_4: 0.7034,
                    metric_5: 0.9049,
                    metric_6: 0.4755,
                    metric_7: 0.8882,
                    metric_8: 0.9866
                },
                method2: {
                    metric_1: 25.9433,
                    metric_2: 0.1593,
                    metric_3: 0.9192,
                    metric_4: 0.9197,
                    metric_5: 0.8157,
                    metric_6: 0.3861,
                    metric_7: 0.8687,
                    metric_8: 0.9846
                },
                method3: {
                    metric_1: 24.415,
                    metric_2: 0.1488,
                    metric_3: 0.9298,
                    metric_4: 0.936,
                    metric_5: 0.7781,
                    metric_6: 0.3111,
                    metric_7: 0.8042,
                    metric_8: 0.9884
                },
                method4: {
                    metric_1: 25.4663,
                    metric_2: 0.1568,
                    metric_3: 0.9276,
                    metric_4: 0.8992,
                    metric_5: 0.9268,
                    metric_6: 0.4417,
                    metric_7: 0.9116,
                    metric_8: 0.9851
                },
                method5: {
                    metric_1: 26.478,
                    metric_2: 0.1423,
                    metric_3: 0.9486,
                    metric_4: 0.8958,
                    metric_5: 0.7467,
                    metric_6: 0.321,
                    metric_7: 0.7837,
                    metric_8: 0.9858
                },
                method6: {
                    metric_1: 23.8207,
                    metric_2: 0.1449,
                    metric_3: 0.8932,
                    metric_4: 0.677,
                    metric_5: 0.8441,
                    metric_6: 0.44,
                    metric_7: 0.8809,
                    metric_8: 0.9769
                },
                method7: {
                    metric_1: 28.5306,
                    metric_2: 0.1509,
                    metric_3: 0.8932,
                    metric_4: 0.6864,
                    metric_5: 0.6415,
                    metric_6: 0.325,
                    metric_7: 0.6816,
                    metric_8: 0.9749
                },
                method8: {
                    metric_1: 25.9749,
                    metric_2: 0.1615,
                    metric_3: 0.8964,
                    metric_4: 0.6066,
                    metric_5: 0.8338,
                    metric_6: 0.4761,
                    metric_7: 0.8232,
                    metric_8: 0.9774
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/technology_0040/input.mp4",
    category: "Technology",
    originalCaption: "A person is using a smartwatch keypad to type on a smartwatch.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the person speaking to someone while typing.",
            targetPrompt: "A person is using a smartwatch keypad to type on a smartwatch. while speaking to someone",
            resultVideos: {
                method1: "VEditBench-Short/technology_0040/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0040/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0040/motion_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0040/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0040/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0040/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0040/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0040/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.1861,
                    metric_2: 0.2477,
                    metric_3: 0.8809,
                    metric_4: 0.6271,
                    metric_5: 0.795,
                    metric_6: 0.4068,
                    metric_7: 0.7915,
                    metric_8: 0.9818
                },
                method2: {
                    metric_1: 29.0407,
                    metric_2: 0.2808,
                    metric_3: 0.9481,
                    metric_4: 0.8062,
                    metric_5: 0.7355,
                    metric_6: 0.3274,
                    metric_7: 0.7974,
                    metric_8: 0.9818
                },
                method3: {
                    metric_1: 29.0399,
                    metric_2: 0.2732,
                    metric_3: 0.947,
                    metric_4: 0.8974,
                    metric_5: 0.6613,
                    metric_6: 0.2712,
                    metric_7: 0.7129,
                    metric_8: 0.9798
                },
                method4: {
                    metric_1: 30.0695,
                    metric_2: 0.2779,
                    metric_3: 0.9428,
                    metric_4: 0.8175,
                    metric_5: 0.8057,
                    metric_6: 0.3896,
                    metric_7: 0.7817,
                    metric_8: 0.9793
                },
                method5: {
                    metric_1: 29.6931,
                    metric_2: 0.2838,
                    metric_3: 0.9547,
                    metric_4: 0.9137,
                    metric_5: 0.7646,
                    metric_6: 0.3314,
                    metric_7: 0.793,
                    metric_8: 0.981
                },
                method6: {
                    metric_1: 29.8007,
                    metric_2: 0.2619,
                    metric_3: 0.908,
                    metric_4: 0.7238,
                    metric_5: 0.7358,
                    metric_6: 0.4292,
                    metric_7: 0.7197,
                    metric_8: 0.9835
                },
                method7: {
                    metric_1: 27.8691,
                    metric_2: 0.2563,
                    metric_3: 0.9046,
                    metric_4: 0.5096,
                    metric_5: 0.5531,
                    metric_6: 0.3453,
                    metric_7: 0.6494,
                    metric_8: 0.9595
                },
                method8: {
                    metric_1: 27.7833,
                    metric_2: 0.2887,
                    metric_3: 0.8702,
                    metric_4: 0.5873,
                    metric_5: 0.8135,
                    metric_6: 0.4195,
                    metric_7: 0.8262,
                    metric_8: 0.9675
                }
            }
        },
        'object-change': {
            editPrompt: "Change the smartwatch to a tablet.",
            targetPrompt: "A person is using a tablet  keypad to type on a tablet.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0040/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0040/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0040/object_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0040/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0040/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0040/object_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0040/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0040/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 19.6915,
                    metric_2: 0.1795,
                    metric_3: 0.9174,
                    metric_4: 0.6115,
                    metric_5: 0.6494,
                    metric_6: 0.2617,
                    metric_7: 0.7373,
                    metric_8: 0.9844
                },
                method2: {
                    metric_1: 23.4406,
                    metric_2: 0.2275,
                    metric_3: 0.9496,
                    metric_4: 0.7767,
                    metric_5: 0.7417,
                    metric_6: 0.3122,
                    metric_7: 0.7715,
                    metric_8: 0.9815
                },
                method3: {
                    metric_1: 23.3144,
                    metric_2: 0.2148,
                    metric_3: 0.9428,
                    metric_4: 0.6092,
                    metric_5: 0.4692,
                    metric_6: 0.2587,
                    metric_7: 0.6431,
                    metric_8: 0.9711
                },
                method4: {
                    metric_1: 21.3649,
                    metric_2: 0.2218,
                    metric_3: 0.9495,
                    metric_4: 0.8084,
                    metric_5: 0.8145,
                    metric_6: 0.3554,
                    metric_7: 0.8208,
                    metric_8: 0.9796
                },
                method5: {
                    metric_1: 18.3016,
                    metric_2: 0.1945,
                    metric_3: 0.9477,
                    metric_4: 0.7724,
                    metric_5: 0.761,
                    metric_6: 0.433,
                    metric_7: 0.8354,
                    metric_8: 0.9812
                },
                method6: {
                    metric_1: 21.383,
                    metric_2: 0.2376,
                    metric_3: 0.9168,
                    metric_4: 0.7201,
                    metric_5: 0.6381,
                    metric_6: 0.2784,
                    metric_7: 0.7236,
                    metric_8: 0.9836
                },
                method7: {
                    metric_1: 25.2347,
                    metric_2: 0.239,
                    metric_3: 0.8813,
                    metric_4: 0.5288,
                    metric_5: 0.6067,
                    metric_6: 0.3975,
                    metric_7: 0.6777,
                    metric_8: 0.9179
                },
                method8: {
                    metric_1: 23.2906,
                    metric_2: 0.259,
                    metric_3: 0.825,
                    metric_4: 0.5863,
                    metric_5: 0.6761,
                    metric_6: 0.3069,
                    metric_7: 0.7495,
                    metric_8: 0.9748
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add charging cable connected to smartwatch",
            targetPrompt: "A person is using a smartwatch keypad to type on a smartwatch, and a charging cable is connected to the smartwatch.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0040/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0040/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0040/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/technology_0040/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0040/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0040/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/technology_0040/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0040/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.5181,
                    metric_2: 0.2311,
                    metric_3: 0.8974,
                    metric_4: 0.6151,
                    metric_5: 0.6972,
                    metric_6: 0.318,
                    metric_7: 0.75,
                    metric_8: 0.986
                },
                method2: {
                    metric_1: 26.5093,
                    metric_2: 0.2544,
                    metric_3: 0.9436,
                    metric_4: 0.8021,
                    metric_5: 0.7956,
                    metric_6: 0.3656,
                    metric_7: 0.8345,
                    metric_8: 0.9815
                },
                method3: {
                    metric_1: 26.4165,
                    metric_2: 0.2569,
                    metric_3: 0.9554,
                    metric_4: 0.8548,
                    metric_5: 0.8294,
                    metric_6: 0.3837,
                    metric_7: 0.9082,
                    metric_8: 0.9785
                },
                method4: {
                    metric_1: 27.5299,
                    metric_2: 0.2487,
                    metric_3: 0.9416,
                    metric_4: 0.8077,
                    metric_5: 0.8609,
                    metric_6: 0.4298,
                    metric_7: 0.8462,
                    metric_8: 0.9791
                },
                method5: {
                    metric_1: 25.6385,
                    metric_2: 0.264,
                    metric_3: 0.943,
                    metric_4: 0.8792,
                    metric_5: 0.7219,
                    metric_6: 0.3063,
                    metric_7: 0.7622,
                    metric_8: 0.9827
                },
                method6: {
                    metric_1: 27.7046,
                    metric_2: 0.2463,
                    metric_3: 0.911,
                    metric_4: 0.7249,
                    metric_5: 0.7363,
                    metric_6: 0.3986,
                    metric_7: 0.7388,
                    metric_8: 0.9821
                },
                method7: {
                    metric_1: 23.181,
                    metric_2: 0.2306,
                    metric_3: 0.9065,
                    metric_4: 0.5364,
                    metric_5: 0.5817,
                    metric_6: 0.3645,
                    metric_7: 0.6802,
                    metric_8: 0.9575
                },
                method8: {
                    metric_1: 24.7847,
                    metric_2: 0.2791,
                    metric_3: 0.8898,
                    metric_4: 0.6355,
                    metric_5: 0.835,
                    metric_6: 0.4814,
                    metric_7: 0.8555,
                    metric_8: 0.9655
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the smartwatch.",
            targetPrompt: "A person is seen moving his hand as if typing on an imaginary keyboard on his smartwatch.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0040/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0040/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0040/object_removal/flatten.mp4",
                method4: "VEditBench-Short/technology_0040/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0040/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0040/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/technology_0040/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0040/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.9064,
                    metric_2: 0.2156,
                    metric_3: 0.8832,
                    metric_4: 0.6254,
                    metric_5: 0.7563,
                    metric_6: 0.3208,
                    metric_7: 0.7803,
                    metric_8: 0.9805
                },
                method2: {
                    metric_1: 30.3412,
                    metric_2: 0.2636,
                    metric_3: 0.9374,
                    metric_4: 0.8143,
                    metric_5: 0.5177,
                    metric_6: 0.2292,
                    metric_7: 0.6357,
                    metric_8: 0.9824
                },
                method3: {
                    metric_1: 30.2437,
                    metric_2: 0.2553,
                    metric_3: 0.9486,
                    metric_4: 0.8318,
                    metric_5: 0.3298,
                    metric_6: 0.1419,
                    metric_7: 0.4927,
                    metric_8: 0.9845
                },
                method4: {
                    metric_1: 30.909,
                    metric_2: 0.2743,
                    metric_3: 0.9431,
                    metric_4: 0.8167,
                    metric_5: 0.757,
                    metric_6: 0.3447,
                    metric_7: 0.7476,
                    metric_8: 0.9809
                },
                method5: {
                    metric_1: 28.4393,
                    metric_2: 0.2703,
                    metric_3: 0.959,
                    metric_4: 0.9091,
                    metric_5: 0.7479,
                    metric_6: 0.3242,
                    metric_7: 0.7905,
                    metric_8: 0.9808
                },
                method6: {
                    metric_1: 31.4693,
                    metric_2: 0.262,
                    metric_3: 0.9067,
                    metric_4: 0.7213,
                    metric_5: 0.6898,
                    metric_6: 0.3658,
                    metric_7: 0.7178,
                    metric_8: 0.9817
                },
                method7: {
                    metric_1: 28.7641,
                    metric_2: 0.2721,
                    metric_3: 0.9127,
                    metric_4: 0.529,
                    metric_5: 0.65,
                    metric_6: 0.4052,
                    metric_7: 0.7202,
                    metric_8: 0.9589
                },
                method8: {
                    metric_1: 25.7449,
                    metric_2: 0.2468,
                    metric_3: 0.8754,
                    metric_4: 0.5767,
                    metric_5: 0.7578,
                    metric_6: 0.3991,
                    metric_7: 0.8101,
                    metric_8: 0.9599
                }
            }
        },
        'scene-change': {
            editPrompt: "Change the setting to a coffee shop.",
            targetPrompt: "A person is using a smartwatch keypad to type on a smartwatch. in a coffee shop",
            resultVideos: {
                method1: "VEditBench-Short/technology_0040/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0040/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0040/scene_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0040/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0040/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0040/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0040/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0040/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.6765,
                    metric_2: 0.2412,
                    metric_3: 0.8967,
                    metric_4: 0.6159,
                    metric_5: 0.754,
                    metric_6: 0.3579,
                    metric_7: 0.7656,
                    metric_8: 0.9811
                },
                method2: {
                    metric_1: 27.7061,
                    metric_2: 0.2744,
                    metric_3: 0.9502,
                    metric_4: 0.816,
                    metric_5: 0.6368,
                    metric_6: 0.3008,
                    metric_7: 0.7373,
                    metric_8: 0.9798
                },
                method3: {
                    metric_1: 16.2224,
                    metric_2: 0.1229,
                    metric_3: 0.9041,
                    metric_4: 0.5724,
                    metric_5: 0.0387,
                    metric_6: 0.0841,
                    metric_7: 0.1316,
                    metric_8: 0.9553
                },
                method4: {
                    metric_1: 28.0908,
                    metric_2: 0.2632,
                    metric_3: 0.9428,
                    metric_4: 0.8049,
                    metric_5: 0.7669,
                    metric_6: 0.348,
                    metric_7: 0.7783,
                    metric_8: 0.9778
                },
                method5: {
                    metric_1: 32.3867,
                    metric_2: 0.3318,
                    metric_3: 0.9516,
                    metric_4: 0.671,
                    metric_5: 0.6987,
                    metric_6: 0.38,
                    metric_7: 0.7432,
                    metric_8: 0.9758
                },
                method6: {
                    metric_1: 29.4716,
                    metric_2: 0.2739,
                    metric_3: 0.9242,
                    metric_4: 0.6948,
                    metric_5: 0.731,
                    metric_6: 0.4028,
                    metric_7: 0.7505,
                    metric_8: 0.9813
                },
                method7: {
                    metric_1: 23.4631,
                    metric_2: 0.2468,
                    metric_3: 0.8957,
                    metric_4: 0.5053,
                    metric_5: 0.5171,
                    metric_6: 0.2938,
                    metric_7: 0.6045,
                    metric_8: 0.9608
                },
                method8: {
                    metric_1: 26.2163,
                    metric_2: 0.2884,
                    metric_3: 0.8438,
                    metric_4: 0.6125,
                    metric_5: 0.8095,
                    metric_6: 0.3728,
                    metric_7: 0.8418,
                    metric_8: 0.968
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Portraits style",
            targetPrompt: "A person is using a smartwatch keypad to type on a smartwatch, depicted in a Portraits style",
            resultVideos: {
                method1: "VEditBench-Short/technology_0040/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0040/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0040/stylization/flatten.mp4",
                method4: "VEditBench-Short/technology_0040/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0040/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0040/stylization/pix2video.mp4",
                method7: "VEditBench-Short/technology_0040/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0040/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.4525,
                    metric_2: 0.2055,
                    metric_3: 0.8871,
                    metric_4: 0.6523,
                    metric_5: 0.7648,
                    metric_6: 0.3782,
                    metric_7: 0.7876,
                    metric_8: 0.9808
                },
                method2: {
                    metric_1: 31.829,
                    metric_2: 0.2664,
                    metric_3: 0.9484,
                    metric_4: 0.8103,
                    metric_5: 0.8209,
                    metric_6: 0.4134,
                    metric_7: 0.8525,
                    metric_8: 0.9815
                },
                method3: {
                    metric_1: 27.6133,
                    metric_2: 0.2296,
                    metric_3: 0.9378,
                    metric_4: 0.6717,
                    metric_5: 0.5069,
                    metric_6: 0.2646,
                    metric_7: 0.7061,
                    metric_8: 0.9739
                },
                method4: {
                    metric_1: 33.3302,
                    metric_2: 0.2592,
                    metric_3: 0.948,
                    metric_4: 0.831,
                    metric_5: 0.8189,
                    metric_6: 0.4096,
                    metric_7: 0.8247,
                    metric_8: 0.98
                },
                method5: {
                    metric_1: 31.4382,
                    metric_2: 0.2682,
                    metric_3: 0.9559,
                    metric_4: 0.7737,
                    metric_5: 0.7403,
                    metric_6: 0.3224,
                    metric_7: 0.7969,
                    metric_8: 0.9816
                },
                method6: {
                    metric_1: 31.568,
                    metric_2: 0.2351,
                    metric_3: 0.9063,
                    metric_4: 0.7444,
                    metric_5: 0.6922,
                    metric_6: 0.4067,
                    metric_7: 0.7256,
                    metric_8: 0.9831
                },
                method7: {
                    metric_1: 31.9492,
                    metric_2: 0.2486,
                    metric_3: 0.9027,
                    metric_4: 0.5142,
                    metric_5: 0.5676,
                    metric_6: 0.365,
                    metric_7: 0.6846,
                    metric_8: 0.9565
                },
                method8: {
                    metric_1: 29.105,
                    metric_2: 0.2704,
                    metric_3: 0.8814,
                    metric_4: 0.6523,
                    metric_5: 0.8285,
                    metric_6: 0.5074,
                    metric_7: 0.8955,
                    metric_8: 0.962
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/technology_0044/input.mp4",
    category: "Technology",
    originalCaption: "Close-up of a hand inserting a credit card into an ATM machine, with a green light illuminating the card insertion slot.",
    editTypes: {
        'motion-change': {
            editPrompt: "Show the hand tapping on the card insertion slot without actually inserting the card inside.",
            targetPrompt: "Close-up of a hand tapping a credit card into an ATM machine, with a green light illuminating the card insertion slot without actually inserting the card inside.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0044/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0044/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0044/motion_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0044/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0044/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0044/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0044/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0044/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 30.4929,
                    metric_2: 0.3062,
                    metric_3: 0.8647,
                    metric_4: 0.4591,
                    metric_5: 0.7335,
                    metric_6: 0.378,
                    metric_7: 0.7378,
                    metric_8: 0.9655
                },
                method2: {
                    metric_1: 28.6914,
                    metric_2: 0.3112,
                    metric_3: 0.8496,
                    metric_4: 0.8398,
                    metric_5: 0.6471,
                    metric_6: 0.3596,
                    metric_7: 0.7373,
                    metric_8: 0.9664
                },
                method3: {
                    metric_1: 29.6786,
                    metric_2: 0.2964,
                    metric_3: 0.8698,
                    metric_4: 0.911,
                    metric_5: 0.7289,
                    metric_6: 0.3427,
                    metric_7: 0.7427,
                    metric_8: 0.9636
                },
                method4: {
                    metric_1: 30.3608,
                    metric_2: 0.3014,
                    metric_3: 0.8284,
                    metric_4: 0.8338,
                    metric_5: 0.6278,
                    metric_6: 0.3254,
                    metric_7: 0.7139,
                    metric_8: 0.9522
                },
                method5: {
                    metric_1: 30.5629,
                    metric_2: 0.2994,
                    metric_3: 0.8638,
                    metric_4: 0.8463,
                    metric_5: 0.7708,
                    metric_6: 0.3759,
                    metric_7: 0.8408,
                    metric_8: 0.9607
                },
                method6: {
                    metric_1: 29.427,
                    metric_2: 0.2984,
                    metric_3: 0.8334,
                    metric_4: 0.685,
                    metric_5: 0.4354,
                    metric_6: 0.1713,
                    metric_7: 0.5229,
                    metric_8: 0.9634
                },
                method7: {
                    metric_1: 34.8075,
                    metric_2: 0.3238,
                    metric_3: 0.8461,
                    metric_4: 0.494,
                    metric_5: 0.4706,
                    metric_6: 0.2462,
                    metric_7: 0.5151,
                    metric_8: 0.9251
                },
                method8: {
                    metric_1: 28.2481,
                    metric_2: 0.2632,
                    metric_3: 0.8328,
                    metric_4: 0.6105,
                    metric_5: 0.6542,
                    metric_6: 0.2856,
                    metric_7: 0.689,
                    metric_8: 0.9319
                }
            }
        },
        'object-change': {
            editPrompt: "Change credit card inserted to a uno card",
            targetPrompt: "Close-up of a hand inserting a uno card into an ATM machine, with a green light illuminating the card insertion slot.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0044/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0044/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0044/object_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0044/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0044/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0044/object_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0044/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0044/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.7432,
                    metric_2: 0.2931,
                    metric_3: 0.8449,
                    metric_4: 0.4497,
                    metric_5: 0.8184,
                    metric_6: 0.4017,
                    metric_7: 0.7808,
                    metric_8: 0.9652
                },
                method2: {
                    metric_1: 28.8861,
                    metric_2: 0.2979,
                    metric_3: 0.8597,
                    metric_4: 0.844,
                    metric_5: 0.6904,
                    metric_6: 0.3896,
                    metric_7: 0.7676,
                    metric_8: 0.9672
                },
                method3: {
                    metric_1: 31.2778,
                    metric_2: 0.2974,
                    metric_3: 0.8558,
                    metric_4: 0.8613,
                    metric_5: 0.7847,
                    metric_6: 0.3903,
                    metric_7: 0.7637,
                    metric_8: 0.9552
                },
                method4: {
                    metric_1: 30.632,
                    metric_2: 0.286,
                    metric_3: 0.8285,
                    metric_4: 0.8315,
                    metric_5: 0.6512,
                    metric_6: 0.3502,
                    metric_7: 0.7178,
                    metric_8: 0.9526
                },
                method5: {
                    metric_1: 30.7434,
                    metric_2: 0.2874,
                    metric_3: 0.8748,
                    metric_4: 0.8265,
                    metric_5: 0.7566,
                    metric_6: 0.3266,
                    metric_7: 0.7861,
                    metric_8: 0.9638
                },
                method6: {
                    metric_1: 30.154,
                    metric_2: 0.297,
                    metric_3: 0.8343,
                    metric_4: 0.6572,
                    metric_5: 0.542,
                    metric_6: 0.2772,
                    metric_7: 0.6606,
                    metric_8: 0.9617
                },
                method7: {
                    metric_1: 34.6104,
                    metric_2: 0.3221,
                    metric_3: 0.8612,
                    metric_4: 0.5034,
                    metric_5: 0.4822,
                    metric_6: 0.2627,
                    metric_7: 0.5776,
                    metric_8: 0.9266
                },
                method8: {
                    metric_1: 29.2929,
                    metric_2: 0.3104,
                    metric_3: 0.8378,
                    metric_4: 0.6117,
                    metric_5: 0.6018,
                    metric_6: 0.2572,
                    metric_7: 0.6177,
                    metric_8: 0.9315
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a batman sticker just above the credit card insertion slot on the ATM machine.",
            targetPrompt: "Close-up of a hand inserting a credit card into an ATM machine, with a green light illuminating the card insertion slot and a batman sticker just above the credit card insertion slot on the ATM machine.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0044/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0044/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0044/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/technology_0044/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0044/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0044/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/technology_0044/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0044/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.8668,
                    metric_2: 0.2643,
                    metric_3: 0.8459,
                    metric_4: 0.4598,
                    metric_5: 0.7525,
                    metric_6: 0.3441,
                    metric_7: 0.7417,
                    metric_8: 0.9589
                },
                method2: {
                    metric_1: 27.4873,
                    metric_2: 0.2715,
                    metric_3: 0.871,
                    metric_4: 0.8266,
                    metric_5: 0.6575,
                    metric_6: 0.3696,
                    metric_7: 0.7188,
                    metric_8: 0.9649
                },
                method3: {
                    metric_1: 26.1659,
                    metric_2: 0.2278,
                    metric_3: 0.8566,
                    metric_4: 0.8586,
                    metric_5: 0.7642,
                    metric_6: 0.4087,
                    metric_7: 0.7397,
                    metric_8: 0.9552
                },
                method4: {
                    metric_1: 29.385,
                    metric_2: 0.2681,
                    metric_3: 0.8356,
                    metric_4: 0.814,
                    metric_5: 0.628,
                    metric_6: 0.3288,
                    metric_7: 0.7095,
                    metric_8: 0.951
                },
                method5: {
                    metric_1: 28.9955,
                    metric_2: 0.2924,
                    metric_3: 0.8641,
                    metric_4: 0.802,
                    metric_5: 0.7356,
                    metric_6: 0.3455,
                    metric_7: 0.7627,
                    metric_8: 0.9583
                },
                method6: {
                    metric_1: 29.8741,
                    metric_2: 0.2776,
                    metric_3: 0.845,
                    metric_4: 0.6523,
                    metric_5: 0.4456,
                    metric_6: 0.1263,
                    metric_7: 0.4941,
                    metric_8: 0.9606
                },
                method7: {
                    metric_1: 30.4088,
                    metric_2: 0.2837,
                    metric_3: 0.8508,
                    metric_4: 0.5275,
                    metric_5: 0.437,
                    metric_6: 0.2132,
                    metric_7: 0.5078,
                    metric_8: 0.9269
                },
                method8: {
                    metric_1: 28.9191,
                    metric_2: 0.293,
                    metric_3: 0.8473,
                    metric_4: 0.5901,
                    metric_5: 0.6814,
                    metric_6: 0.3197,
                    metric_7: 0.6665,
                    metric_8: 0.9301
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the green light illuminating card insertion slot.",
            targetPrompt: "Close-up of a hand inserting a credit card into an ATM machine.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0044/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0044/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0044/object_removal/flatten.mp4",
                method4: "VEditBench-Short/technology_0044/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0044/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0044/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/technology_0044/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0044/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.05,
                    metric_2: 0.2766,
                    metric_3: 0.8349,
                    metric_4: 0.4769,
                    metric_5: 0.7716,
                    metric_6: 0.367,
                    metric_7: 0.7476,
                    metric_8: 0.9654
                },
                method2: {
                    metric_1: 27.8504,
                    metric_2: 0.283,
                    metric_3: 0.8289,
                    metric_4: 0.8506,
                    metric_5: 0.6263,
                    metric_6: 0.3225,
                    metric_7: 0.7178,
                    metric_8: 0.9686
                },
                method3: {
                    metric_1: 29.469,
                    metric_2: 0.2868,
                    metric_3: 0.8503,
                    metric_4: 0.8645,
                    metric_5: 0.639,
                    metric_6: 0.2705,
                    metric_7: 0.7344,
                    metric_8: 0.9594
                },
                method4: {
                    metric_1: 29.1412,
                    metric_2: 0.2827,
                    metric_3: 0.826,
                    metric_4: 0.8525,
                    metric_5: 0.6421,
                    metric_6: 0.2898,
                    metric_7: 0.708,
                    metric_8: 0.9539
                },
                method5: {
                    metric_1: 29.436,
                    metric_2: 0.2657,
                    metric_3: 0.8772,
                    metric_4: 0.8657,
                    metric_5: 0.7487,
                    metric_6: 0.3802,
                    metric_7: 0.7734,
                    metric_8: 0.9588
                },
                method6: {
                    metric_1: 25.4108,
                    metric_2: 0.2988,
                    metric_3: 0.8435,
                    metric_4: 0.6932,
                    metric_5: 0.4013,
                    metric_6: 0.1964,
                    metric_7: 0.52,
                    metric_8: 0.9635
                },
                method7: {
                    metric_1: 30.9469,
                    metric_2: 0.287,
                    metric_3: 0.8523,
                    metric_4: 0.5865,
                    metric_5: 0.4951,
                    metric_6: 0.2442,
                    metric_7: 0.5991,
                    metric_8: 0.9297
                },
                method8: {
                    metric_1: 25.8089,
                    metric_2: 0.257,
                    metric_3: 0.8534,
                    metric_4: 0.619,
                    metric_5: 0.6453,
                    metric_6: 0.2842,
                    metric_7: 0.7031,
                    metric_8: 0.9397
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it happen in rainy setting",
            targetPrompt: "Close-up of a hand inserting a credit card into an ATM machine, with a green light illuminating the card insertion slot while raining.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0044/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0044/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0044/scene_change/flatten.mp4",
                method4: "VEditBench-Short/technology_0044/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0044/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0044/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/technology_0044/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0044/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.1789,
                    metric_2: 0.2825,
                    metric_3: 0.8638,
                    metric_4: 0.453,
                    metric_5: 0.7399,
                    metric_6: 0.3898,
                    metric_7: 0.7407,
                    metric_8: 0.9666
                },
                method2: {
                    metric_1: 30.58,
                    metric_2: 0.2989,
                    metric_3: 0.8502,
                    metric_4: 0.8322,
                    metric_5: 0.6994,
                    metric_6: 0.387,
                    metric_7: 0.7671,
                    metric_8: 0.9674
                },
                method3: {
                    metric_1: 30.5376,
                    metric_2: 0.3196,
                    metric_3: 0.835,
                    metric_4: 0.856,
                    metric_5: 0.5561,
                    metric_6: 0.2447,
                    metric_7: 0.6191,
                    metric_8: 0.9642
                },
                method4: {
                    metric_1: 29.6576,
                    metric_2: 0.2744,
                    metric_3: 0.8413,
                    metric_4: 0.8444,
                    metric_5: 0.6041,
                    metric_6: 0.3116,
                    metric_7: 0.6992,
                    metric_8: 0.9529
                },
                method5: {
                    metric_1: 33.4249,
                    metric_2: 0.3105,
                    metric_3: 0.8784,
                    metric_4: 0.7908,
                    metric_5: 0.551,
                    metric_6: 0.2595,
                    metric_7: 0.6831,
                    metric_8: 0.9622
                },
                method6: {
                    metric_1: 29.409,
                    metric_2: 0.2911,
                    metric_3: 0.8448,
                    metric_4: 0.6633,
                    metric_5: 0.5071,
                    metric_6: 0.2362,
                    metric_7: 0.6113,
                    metric_8: 0.9578
                },
                method7: {
                    metric_1: 32.9049,
                    metric_2: 0.3292,
                    metric_3: 0.8426,
                    metric_4: 0.5519,
                    metric_5: 0.4711,
                    metric_6: 0.2502,
                    metric_7: 0.5596,
                    metric_8: 0.9287
                },
                method8: {
                    metric_1: 27.9286,
                    metric_2: 0.2497,
                    metric_3: 0.8221,
                    metric_4: 0.6053,
                    metric_5: 0.589,
                    metric_6: 0.2567,
                    metric_7: 0.6201,
                    metric_8: 0.9283
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Analog Film style",
            targetPrompt: "Make Close-up of a hand inserting a credit card into an ATM machine, with a green light illuminating the card insertion slot in a Analog Film style.",
            resultVideos: {
                method1: "VEditBench-Short/technology_0044/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/technology_0044/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/technology_0044/stylization/flatten.mp4",
                method4: "VEditBench-Short/technology_0044/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/technology_0044/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/technology_0044/stylization/pix2video.mp4",
                method7: "VEditBench-Short/technology_0044/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/technology_0044/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 31.9611,
                    metric_2: 0.3104,
                    metric_3: 0.8509,
                    metric_4: 0.468,
                    metric_5: 0.6791,
                    metric_6: 0.3507,
                    metric_7: 0.7373,
                    metric_8: 0.9636
                },
                method2: {
                    metric_1: 30.2879,
                    metric_2: 0.2999,
                    metric_3: 0.8639,
                    metric_4: 0.8336,
                    metric_5: 0.6352,
                    metric_6: 0.3464,
                    metric_7: 0.7339,
                    metric_8: 0.9693
                },
                method3: {
                    metric_1: 32.0535,
                    metric_2: 0.2503,
                    metric_3: 0.8633,
                    metric_4: 0.8088,
                    metric_5: 0.3968,
                    metric_6: 0.1544,
                    metric_7: 0.5151,
                    metric_8: 0.9703
                },
                method4: {
                    metric_1: 31.9328,
                    metric_2: 0.2826,
                    metric_3: 0.8293,
                    metric_4: 0.8401,
                    metric_5: 0.5508,
                    metric_6: 0.2678,
                    metric_7: 0.646,
                    metric_8: 0.9568
                },
                method5: {
                    metric_1: 31.9214,
                    metric_2: 0.2708,
                    metric_3: 0.8471,
                    metric_4: 0.8357,
                    metric_5: 0.5557,
                    metric_6: 0.2821,
                    metric_7: 0.6562,
                    metric_8: 0.9664
                },
                method6: {
                    metric_1: 29.6469,
                    metric_2: 0.2808,
                    metric_3: 0.8424,
                    metric_4: 0.6341,
                    metric_5: 0.3533,
                    metric_6: 0.2082,
                    metric_7: 0.5103,
                    metric_8: 0.9637
                },
                method7: {
                    metric_1: 34.3683,
                    metric_2: 0.3093,
                    metric_3: 0.853,
                    metric_4: 0.5228,
                    metric_5: 0.4409,
                    metric_6: 0.2217,
                    metric_7: 0.4929,
                    metric_8: 0.9322
                },
                method8: {
                    metric_1: 30.9906,
                    metric_2: 0.2959,
                    metric_3: 0.8085,
                    metric_4: 0.6094,
                    metric_5: 0.5774,
                    metric_6: 0.2554,
                    metric_7: 0.6396,
                    metric_8: 0.9302
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/vehicle_0005/input.mp4",
    category: "Vehicle",
    originalCaption: "An ambulance speeds through a snow-covered city street wih tress around.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the ambulance parked.",
            targetPrompt: "An ambulance is parked on a snow-covered city street with trees around.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0005/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0005/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0005/motion_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0005/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0005/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0005/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0005/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0005/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.5306,
                    metric_2: 0.258,
                    metric_3: 0.8679,
                    metric_4: 0.3547,
                    metric_5: 0.5961,
                    metric_6: 0.3049,
                    metric_7: 0.6411,
                    metric_8: 0.9643
                },
                method2: {
                    metric_1: 24.4765,
                    metric_2: 0.2834,
                    metric_3: 0.9013,
                    metric_4: 0.6847,
                    metric_5: 0.6374,
                    metric_6: 0.2701,
                    metric_7: 0.623,
                    metric_8: 0.9639
                },
                method3: {
                    metric_1: 22.7683,
                    metric_2: 0.299,
                    metric_3: 0.926,
                    metric_4: 0.7516,
                    metric_5: 0.5918,
                    metric_6: 0.2382,
                    metric_7: 0.5864,
                    metric_8: 0.9745
                },
                method4: {
                    metric_1: 23.7643,
                    metric_2: 0.2616,
                    metric_3: 0.9425,
                    metric_4: 0.6081,
                    metric_5: 0.6047,
                    metric_6: 0.2691,
                    metric_7: 0.5869,
                    metric_8: 0.954
                },
                method5: {
                    metric_1: 23.8997,
                    metric_2: 0.2701,
                    metric_3: 0.9355,
                    metric_4: 0.8668,
                    metric_5: 0.5345,
                    metric_6: 0.2789,
                    metric_7: 0.52,
                    metric_8: 0.9652
                },
                method6: {
                    metric_1: 25.5375,
                    metric_2: 0.2871,
                    metric_3: 0.9032,
                    metric_4: 0.6507,
                    metric_5: 0.5617,
                    metric_6: 0.2781,
                    metric_7: 0.6108,
                    metric_8: 0.9651
                },
                method7: {
                    metric_1: 25.8153,
                    metric_2: 0.2604,
                    metric_3: 0.8417,
                    metric_4: 0.3513,
                    metric_5: 0.624,
                    metric_6: 0.402,
                    metric_7: 0.6816,
                    metric_8: 0.9032
                },
                method8: {
                    metric_1: 23.3787,
                    metric_2: 0.2652,
                    metric_3: 0.8978,
                    metric_4: 0.5276,
                    metric_5: 0.5144,
                    metric_6: 0.2309,
                    metric_7: 0.5146,
                    metric_8: 0.9712
                }
            }
        },
        'object-change': {
            editPrompt: "Change the ambulance to a police car.",
            targetPrompt: "A police car speeds through a snow-covered city street with trees around.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0005/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0005/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0005/object_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0005/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0005/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0005/object_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0005/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0005/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.1118,
                    metric_2: 0.2861,
                    metric_3: 0.9007,
                    metric_4: 0.3666,
                    metric_5: 0.6051,
                    metric_6: 0.3213,
                    metric_7: 0.5771,
                    metric_8: 0.9689
                },
                method2: {
                    metric_1: 22.4245,
                    metric_2: 0.2087,
                    metric_3: 0.9279,
                    metric_4: 0.7169,
                    metric_5: 0.5731,
                    metric_6: 0.2755,
                    metric_7: 0.5972,
                    metric_8: 0.9668
                },
                method3: {
                    metric_1: 23.9006,
                    metric_2: 0.2707,
                    metric_3: 0.9368,
                    metric_4: 0.8681,
                    metric_5: 0.4216,
                    metric_6: 0.2286,
                    metric_7: 0.4485,
                    metric_8: 0.9663
                },
                method4: {
                    metric_1: 22.1906,
                    metric_2: 0.1982,
                    metric_3: 0.9241,
                    metric_4: 0.6683,
                    metric_5: 0.5766,
                    metric_6: 0.2879,
                    metric_7: 0.5967,
                    metric_8: 0.9567
                },
                method5: {
                    metric_1: 23.8766,
                    metric_2: 0.2582,
                    metric_3: 0.9398,
                    metric_4: 0.8787,
                    metric_5: 0.5136,
                    metric_6: 0.2819,
                    metric_7: 0.5288,
                    metric_8: 0.968
                },
                method6: {
                    metric_1: 25.9597,
                    metric_2: 0.2563,
                    metric_3: 0.9426,
                    metric_4: 0.696,
                    metric_5: 0.3513,
                    metric_6: 0.2887,
                    metric_7: 0.4983,
                    metric_8: 0.9732
                },
                method7: {
                    metric_1: 25.4641,
                    metric_2: 0.2865,
                    metric_3: 0.8097,
                    metric_4: 0.3749,
                    metric_5: 0.3165,
                    metric_6: 0.3176,
                    metric_7: 0.5723,
                    metric_8: 0.9175
                },
                method8: {
                    metric_1: 23.754,
                    metric_2: 0.2829,
                    metric_3: 0.9221,
                    metric_4: 0.5772,
                    metric_5: 0.4997,
                    metric_6: 0.2825,
                    metric_7: 0.5176,
                    metric_8: 0.9717
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a red fire hydrant on the sidewalk.",
            targetPrompt: "An ambulance speeds through a snow-covered city street wih tress around, past a red fire hydrant on the sidewalk.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0005/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0005/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0005/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0005/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0005/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0005/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0005/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0005/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.1944,
                    metric_2: 0.2994,
                    metric_3: 0.9039,
                    metric_4: 0.3844,
                    metric_5: 0.6135,
                    metric_6: 0.3365,
                    metric_7: 0.6147,
                    metric_8: 0.9636
                },
                method2: {
                    metric_1: 23.9462,
                    metric_2: 0.2783,
                    metric_3: 0.9386,
                    metric_4: 0.6935,
                    metric_5: 0.654,
                    metric_6: 0.4068,
                    metric_7: 0.6807,
                    metric_8: 0.9602
                },
                method3: {
                    metric_1: 22.7122,
                    metric_2: 0.2692,
                    metric_3: 0.9301,
                    metric_4: 0.7556,
                    metric_5: 0.5646,
                    metric_6: 0.2417,
                    metric_7: 0.5811,
                    metric_8: 0.9578
                },
                method4: {
                    metric_1: 22.4539,
                    metric_2: 0.2467,
                    metric_3: 0.9542,
                    metric_4: 0.6366,
                    metric_5: 0.6011,
                    metric_6: 0.3366,
                    metric_7: 0.5957,
                    metric_8: 0.9485
                },
                method5: {
                    metric_1: 23.551,
                    metric_2: 0.2245,
                    metric_3: 0.9581,
                    metric_4: 0.7794,
                    metric_5: 0.5268,
                    metric_6: 0.3256,
                    metric_7: 0.488,
                    metric_8: 0.9636
                },
                method6: {
                    metric_1: 26.3945,
                    metric_2: 0.3062,
                    metric_3: 0.9147,
                    metric_4: 0.6908,
                    metric_5: 0.3912,
                    metric_6: 0.3175,
                    metric_7: 0.5854,
                    metric_8: 0.9673
                },
                method7: {
                    metric_1: 26.6583,
                    metric_2: 0.3084,
                    metric_3: 0.7922,
                    metric_4: 0.3593,
                    metric_5: 0.211,
                    metric_6: 0.2212,
                    metric_7: 0.3105,
                    metric_8: 0.9266
                },
                method8: {
                    metric_1: 24.7023,
                    metric_2: 0.2939,
                    metric_3: 0.915,
                    metric_4: 0.5606,
                    metric_5: 0.5309,
                    metric_6: 0.2414,
                    metric_7: 0.5044,
                    metric_8: 0.9657
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the trees.",
            targetPrompt: "An ambulance speeds through a city street cleared of snow with no trees around.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0005/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0005/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0005/object_removal/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0005/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0005/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0005/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0005/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0005/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.9952,
                    metric_2: 0.2939,
                    metric_3: 0.8798,
                    metric_4: 0.3949,
                    metric_5: 0.5899,
                    metric_6: 0.272,
                    metric_7: 0.5669,
                    metric_8: 0.9646
                },
                method2: {
                    metric_1: 26.609,
                    metric_2: 0.2999,
                    metric_3: 0.9329,
                    metric_4: 0.7239,
                    metric_5: 0.4765,
                    metric_6: 0.2254,
                    metric_7: 0.4985,
                    metric_8: 0.964
                },
                method3: {
                    metric_1: 23.026,
                    metric_2: 0.2812,
                    metric_3: 0.911,
                    metric_4: 0.8089,
                    metric_5: 0.5048,
                    metric_6: 0.2493,
                    metric_7: 0.4888,
                    metric_8: 0.9657
                },
                method4: {
                    metric_1: 24.9419,
                    metric_2: 0.2728,
                    metric_3: 0.9142,
                    metric_4: 0.6844,
                    metric_5: 0.4238,
                    metric_6: 0.2037,
                    metric_7: 0.4512,
                    metric_8: 0.9536
                },
                method5: {
                    metric_1: 27.1961,
                    metric_2: 0.2983,
                    metric_3: 0.9542,
                    metric_4: 0.8808,
                    metric_5: 0.4978,
                    metric_6: 0.2459,
                    metric_7: 0.4939,
                    metric_8: 0.966
                },
                method6: {
                    metric_1: 30.0049,
                    metric_2: 0.3052,
                    metric_3: 0.8852,
                    metric_4: 0.6935,
                    metric_5: 0.3898,
                    metric_6: 0.231,
                    metric_7: 0.4424,
                    metric_8: 0.9676
                },
                method7: {
                    metric_1: 25.5206,
                    metric_2: 0.2172,
                    metric_3: 0.8987,
                    metric_4: 0.3891,
                    metric_5: 0.3461,
                    metric_6: 0.4132,
                    metric_7: 0.491,
                    metric_8: 0.9206
                },
                method8: {
                    metric_1: 25.3257,
                    metric_2: 0.2761,
                    metric_3: 0.9321,
                    metric_4: 0.5651,
                    metric_5: 0.5017,
                    metric_6: 0.2685,
                    metric_7: 0.5264,
                    metric_8: 0.9709
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a busy downtown area.",
            targetPrompt: "An ambulance speeds through a snow-covered city street in a busy downtown area.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0005/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0005/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0005/scene_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0005/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0005/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0005/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0005/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0005/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.4887,
                    metric_2: 0.3028,
                    metric_3: 0.8589,
                    metric_4: 0.3822,
                    metric_5: 0.5675,
                    metric_6: 0.2829,
                    metric_7: 0.582,
                    metric_8: 0.97
                },
                method2: {
                    metric_1: 24.3591,
                    metric_2: 0.3094,
                    metric_3: 0.9298,
                    metric_4: 0.6662,
                    metric_5: 0.5941,
                    metric_6: 0.4485,
                    metric_7: 0.5503,
                    metric_8: 0.9585
                },
                method3: {
                    metric_1: 23.0149,
                    metric_2: 0.2953,
                    metric_3: 0.9309,
                    metric_4: 0.7719,
                    metric_5: 0.4439,
                    metric_6: 0.3345,
                    metric_7: 0.4624,
                    metric_8: 0.9537
                },
                method4: {
                    metric_1: 24.0994,
                    metric_2: 0.2956,
                    metric_3: 0.9462,
                    metric_4: 0.6489,
                    metric_5: 0.5067,
                    metric_6: 0.3891,
                    metric_7: 0.5186,
                    metric_8: 0.9522
                },
                method5: {
                    metric_1: 24.2737,
                    metric_2: 0.3143,
                    metric_3: 0.9411,
                    metric_4: 0.8648,
                    metric_5: 0.5085,
                    metric_6: 0.2464,
                    metric_7: 0.4895,
                    metric_8: 0.9658
                },
                method6: {
                    metric_1: 27.6483,
                    metric_2: 0.3203,
                    metric_3: 0.8894,
                    metric_4: 0.7001,
                    metric_5: 0.3562,
                    metric_6: 0.3055,
                    metric_7: 0.4983,
                    metric_8: 0.973
                },
                method7: {
                    metric_1: 27.5085,
                    metric_2: 0.3085,
                    metric_3: 0.8186,
                    metric_4: 0.4226,
                    metric_5: 0.2335,
                    metric_6: 0.2574,
                    metric_7: 0.3511,
                    metric_8: 0.9323
                },
                method8: {
                    metric_1: 25.6006,
                    metric_2: 0.3089,
                    metric_3: 0.9191,
                    metric_4: 0.5418,
                    metric_5: 0.5048,
                    metric_6: 0.2505,
                    metric_7: 0.5288,
                    metric_8: 0.9715
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Watercolor style",
            targetPrompt: "An ambulance speeds through a snow-covered city street with trees around, depicted in a Watercolor style",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0005/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0005/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0005/stylization/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0005/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0005/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0005/stylization/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0005/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0005/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.4098,
                    metric_2: 0.2625,
                    metric_3: 0.8866,
                    metric_4: 0.3929,
                    metric_5: 0.5542,
                    metric_6: 0.3292,
                    metric_7: 0.6455,
                    metric_8: 0.9694
                },
                method2: {
                    metric_1: 28.3923,
                    metric_2: 0.294,
                    metric_3: 0.936,
                    metric_4: 0.7,
                    metric_5: 0.4854,
                    metric_6: 0.3834,
                    metric_7: 0.4932,
                    metric_8: 0.9588
                },
                method3: {
                    metric_1: 23.0519,
                    metric_2: 0.2667,
                    metric_3: 0.8946,
                    metric_4: 0.5672,
                    metric_5: 0.3031,
                    metric_6: 0.3161,
                    metric_7: 0.4045,
                    metric_8: 0.9325
                },
                method4: {
                    metric_1: 28.7413,
                    metric_2: 0.2939,
                    metric_3: 0.9585,
                    metric_4: 0.6816,
                    metric_5: 0.3784,
                    metric_6: 0.336,
                    metric_7: 0.481,
                    metric_8: 0.9461
                },
                method5: {
                    metric_1: 27.7888,
                    metric_2: 0.2718,
                    metric_3: 0.924,
                    metric_4: 0.7354,
                    metric_5: 0.41,
                    metric_6: 0.2473,
                    metric_7: 0.4309,
                    metric_8: 0.9531
                },
                method6: {
                    metric_1: 27.4655,
                    metric_2: 0.3059,
                    metric_3: 0.9305,
                    metric_4: 0.6305,
                    metric_5: 0.324,
                    metric_6: 0.4285,
                    metric_7: 0.4463,
                    metric_8: 0.9599
                },
                method7: {
                    metric_1: 23.5163,
                    metric_2: 0.2579,
                    metric_3: 0.707,
                    metric_4: 0.3161,
                    metric_5: 0.3234,
                    metric_6: 0.3451,
                    metric_7: 0.4119,
                    metric_8: 0.9255
                },
                method8: {
                    metric_1: 25.765,
                    metric_2: 0.2561,
                    metric_3: 0.913,
                    metric_4: 0.5269,
                    metric_5: 0.4189,
                    metric_6: 0.2476,
                    metric_7: 0.4412,
                    metric_8: 0.9689
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/vehicle_0012/input.mp4",
    category: "Vehicle",
    originalCaption: "A car is driving toward the camera on an asphalt road in the woods, and there are trees and rocks on the sides of the road.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the car parked.",
            targetPrompt: "A car is parked on an asphalt road in the woods, with trees and rocks on the sides of the road.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0012/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0012/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0012/motion_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0012/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0012/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0012/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0012/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0012/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.4502,
                    metric_2: 0.2182,
                    metric_3: 0.9631,
                    metric_4: 0.3727,
                    metric_5: 0.7305,
                    metric_6: 0.3178,
                    metric_7: 0.7598,
                    metric_8: 0.9802
                },
                method2: {
                    metric_1: 26.1312,
                    metric_2: 0.2487,
                    metric_3: 0.9798,
                    metric_4: 0.5524,
                    metric_5: 0.9276,
                    metric_6: 0.4421,
                    metric_7: 0.8872,
                    metric_8: 0.9731
                },
                method3: {
                    metric_1: 27.7732,
                    metric_2: 0.2752,
                    metric_3: 0.9805,
                    metric_4: 0.5843,
                    metric_5: 0.7727,
                    metric_6: 0.3094,
                    metric_7: 0.7568,
                    metric_8: 0.9692
                },
                method4: {
                    metric_1: 26.505,
                    metric_2: 0.2384,
                    metric_3: 0.9833,
                    metric_4: 0.5508,
                    metric_5: 0.8874,
                    metric_6: 0.4345,
                    metric_7: 0.8516,
                    metric_8: 0.9732
                },
                method5: {
                    metric_1: 26.4654,
                    metric_2: 0.237,
                    metric_3: 0.9847,
                    metric_4: 0.6448,
                    metric_5: 0.787,
                    metric_6: 0.2872,
                    metric_7: 0.8184,
                    metric_8: 0.9786
                },
                method6: {
                    metric_1: 25.8684,
                    metric_2: 0.2194,
                    metric_3: 0.9775,
                    metric_4: 0.5832,
                    metric_5: 0.7062,
                    metric_6: 0.3722,
                    metric_7: 0.7168,
                    metric_8: 0.9782
                },
                method7: {
                    metric_1: 27.7698,
                    metric_2: 0.2639,
                    metric_3: 0.9735,
                    metric_4: 0.445,
                    metric_5: 0.3745,
                    metric_6: 0.2341,
                    metric_7: 0.4165,
                    metric_8: 0.9612
                },
                method8: {
                    metric_1: 23.4884,
                    metric_2: 0.2308,
                    metric_3: 0.9791,
                    metric_4: 0.4995,
                    metric_5: 0.6389,
                    metric_6: 0.357,
                    metric_7: 0.646,
                    metric_8: 0.9842
                }
            }
        },
        'object-change': {
            editPrompt: "Change the car to a motorcycle.",
            targetPrompt: "A motorcycle is driving toward the camera on an asphalt road in the woods, and there are trees and rocks on the sides of the road.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0012/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0012/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0012/object_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0012/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0012/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0012/object_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0012/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0012/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 30.7766,
                    metric_2: 0.2362,
                    metric_3: 0.9638,
                    metric_4: 0.3666,
                    metric_5: 0.6147,
                    metric_6: 0.3082,
                    metric_7: 0.6528,
                    metric_8: 0.9808
                },
                method2: {
                    metric_1: 30.1505,
                    metric_2: 0.2394,
                    metric_3: 0.981,
                    metric_4: 0.5511,
                    metric_5: 0.8703,
                    metric_6: 0.437,
                    metric_7: 0.8477,
                    metric_8: 0.9739
                },
                method3: {
                    metric_1: 31.2561,
                    metric_2: 0.2385,
                    metric_3: 0.9783,
                    metric_4: 0.6437,
                    metric_5: 0.7791,
                    metric_6: 0.3826,
                    metric_7: 0.8022,
                    metric_8: 0.9783
                },
                method4: {
                    metric_1: 30.2939,
                    metric_2: 0.237,
                    metric_3: 0.9797,
                    metric_4: 0.5538,
                    metric_5: 0.8387,
                    metric_6: 0.4513,
                    metric_7: 0.8306,
                    metric_8: 0.9729
                },
                method5: {
                    metric_1: 31.8646,
                    metric_2: 0.257,
                    metric_3: 0.9848,
                    metric_4: 0.6262,
                    metric_5: 0.751,
                    metric_6: 0.414,
                    metric_7: 0.8052,
                    metric_8: 0.9771
                },
                method6: {
                    metric_1: 30.5596,
                    metric_2: 0.2324,
                    metric_3: 0.9767,
                    metric_4: 0.5913,
                    metric_5: 0.6335,
                    metric_6: 0.4679,
                    metric_7: 0.688,
                    metric_8: 0.9811
                },
                method7: {
                    metric_1: 32.5069,
                    metric_2: 0.2762,
                    metric_3: 0.9681,
                    metric_4: 0.3984,
                    metric_5: 0.3213,
                    metric_6: 0.232,
                    metric_7: 0.4102,
                    metric_8: 0.9595
                },
                method8: {
                    metric_1: 28.3359,
                    metric_2: 0.2007,
                    metric_3: 0.9793,
                    metric_4: 0.4897,
                    metric_5: 0.5654,
                    metric_6: 0.2357,
                    metric_7: 0.5889,
                    metric_8: 0.9853
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a bicycle parked on the side of the road.",
            targetPrompt: "A car is driving toward the camera on an asphalt road in the woods, with trees and rocks on the sides of the road and a bicycle parked on the side.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0012/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0012/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0012/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0012/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0012/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0012/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0012/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0012/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.4427,
                    metric_2: 0.2176,
                    metric_3: 0.9515,
                    metric_4: 0.3906,
                    metric_5: 0.6412,
                    metric_6: 0.2482,
                    metric_7: 0.6621,
                    metric_8: 0.9812
                },
                method2: {
                    metric_1: 27.0962,
                    metric_2: 0.2092,
                    metric_3: 0.9795,
                    metric_4: 0.5711,
                    metric_5: 0.9106,
                    metric_6: 0.4042,
                    metric_7: 0.8726,
                    metric_8: 0.9749
                },
                method3: {
                    metric_1: 28.761,
                    metric_2: 0.2347,
                    metric_3: 0.9826,
                    metric_4: 0.6622,
                    metric_5: 0.833,
                    metric_6: 0.2959,
                    metric_7: 0.8569,
                    metric_8: 0.9802
                },
                method4: {
                    metric_1: 28.0508,
                    metric_2: 0.2037,
                    metric_3: 0.9806,
                    metric_4: 0.5651,
                    metric_5: 0.8731,
                    metric_6: 0.4127,
                    metric_7: 0.8457,
                    metric_8: 0.9741
                },
                method5: {
                    metric_1: 28.9298,
                    metric_2: 0.2627,
                    metric_3: 0.9853,
                    metric_4: 0.6327,
                    metric_5: 0.7394,
                    metric_6: 0.3318,
                    metric_7: 0.75,
                    metric_8: 0.977
                },
                method6: {
                    metric_1: 27.5387,
                    metric_2: 0.2092,
                    metric_3: 0.9739,
                    metric_4: 0.5981,
                    metric_5: 0.5718,
                    metric_6: 0.3048,
                    metric_7: 0.6646,
                    metric_8: 0.9828
                },
                method7: {
                    metric_1: 28.5862,
                    metric_2: 0.2696,
                    metric_3: 0.9734,
                    metric_4: 0.4507,
                    metric_5: 0.4265,
                    metric_6: 0.2469,
                    metric_7: 0.4622,
                    metric_8: 0.9601
                },
                method8: {
                    metric_1: 28.4697,
                    metric_2: 0.2274,
                    metric_3: 0.9784,
                    metric_4: 0.4833,
                    metric_5: 0.5944,
                    metric_6: 0.2675,
                    metric_7: 0.5952,
                    metric_8: 0.9854
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the rocks.",
            targetPrompt: "A car is driving toward the camera on an asphalt road in the woods, and there are trees on the sides of the road.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0012/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0012/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0012/object_removal/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0012/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0012/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0012/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0012/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0012/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.2387,
                    metric_2: 0.2331,
                    metric_3: 0.9626,
                    metric_4: 0.4011,
                    metric_5: 0.5647,
                    metric_6: 0.2703,
                    metric_7: 0.6094,
                    metric_8: 0.9835
                },
                method2: {
                    metric_1: 27.7962,
                    metric_2: 0.2331,
                    metric_3: 0.9796,
                    metric_4: 0.5612,
                    metric_5: 0.8804,
                    metric_6: 0.4332,
                    metric_7: 0.8608,
                    metric_8: 0.9777
                },
                method3: {
                    metric_1: 28.7836,
                    metric_2: 0.2429,
                    metric_3: 0.9804,
                    metric_4: 0.6637,
                    metric_5: 0.6813,
                    metric_6: 0.3588,
                    metric_7: 0.7183,
                    metric_8: 0.9882
                },
                method4: {
                    metric_1: 29.5358,
                    metric_2: 0.2388,
                    metric_3: 0.9822,
                    metric_4: 0.5571,
                    metric_5: 0.8544,
                    metric_6: 0.4354,
                    metric_7: 0.8374,
                    metric_8: 0.9773
                },
                method5: {
                    metric_1: 29.5288,
                    metric_2: 0.2441,
                    metric_3: 0.9871,
                    metric_4: 0.5084,
                    metric_5: 0.7166,
                    metric_6: 0.3227,
                    metric_7: 0.7773,
                    metric_8: 0.9733
                },
                method6: {
                    metric_1: 28.8846,
                    metric_2: 0.2436,
                    metric_3: 0.9736,
                    metric_4: 0.5861,
                    metric_5: 0.5094,
                    metric_6: 0.3624,
                    metric_7: 0.5708,
                    metric_8: 0.9826
                },
                method7: {
                    metric_1: 30.304,
                    metric_2: 0.2857,
                    metric_3: 0.9661,
                    metric_4: 0.4664,
                    metric_5: 0.428,
                    metric_6: 0.2753,
                    metric_7: 0.4761,
                    metric_8: 0.9635
                },
                method8: {
                    metric_1: 28.0808,
                    metric_2: 0.2368,
                    metric_3: 0.9761,
                    metric_4: 0.5018,
                    metric_5: 0.5765,
                    metric_6: 0.2723,
                    metric_7: 0.6064,
                    metric_8: 0.9883
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it on a snowy mountain road.",
            targetPrompt: "A car is driving toward the camera on a snowy mountain road, and there are trees and rocks on the sides of the road.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0012/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0012/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0012/scene_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0012/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0012/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0012/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0012/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0012/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.016,
                    metric_2: 0.1779,
                    metric_3: 0.9498,
                    metric_4: 0.3361,
                    metric_5: 0.619,
                    metric_6: 0.271,
                    metric_7: 0.6782,
                    metric_8: 0.9797
                },
                method2: {
                    metric_1: 26.6485,
                    metric_2: 0.2357,
                    metric_3: 0.9825,
                    metric_4: 0.5585,
                    metric_5: 0.7239,
                    metric_6: 0.3485,
                    metric_7: 0.7339,
                    metric_8: 0.9772
                },
                method3: {
                    metric_1: 25.0501,
                    metric_2: 0.209,
                    metric_3: 0.9467,
                    metric_4: 0.5215,
                    metric_5: 0.5761,
                    metric_6: 0.3523,
                    metric_7: 0.6353,
                    metric_8: 0.9776
                },
                method4: {
                    metric_1: 26.6784,
                    metric_2: 0.2158,
                    metric_3: 0.982,
                    metric_4: 0.5631,
                    metric_5: 0.7943,
                    metric_6: 0.4005,
                    metric_7: 0.8003,
                    metric_8: 0.9779
                },
                method5: {
                    metric_1: 25.1298,
                    metric_2: 0.2129,
                    metric_3: 0.9859,
                    metric_4: 0.5849,
                    metric_5: 0.5345,
                    metric_6: 0.2794,
                    metric_7: 0.6294,
                    metric_8: 0.973
                },
                method6: {
                    metric_1: 24.9766,
                    metric_2: 0.2259,
                    metric_3: 0.9561,
                    metric_4: 0.5494,
                    metric_5: 0.4881,
                    metric_6: 0.2537,
                    metric_7: 0.5938,
                    metric_8: 0.9835
                },
                method7: {
                    metric_1: 24.8338,
                    metric_2: 0.2361,
                    metric_3: 0.9543,
                    metric_4: 0.4276,
                    metric_5: 0.5602,
                    metric_6: 0.3598,
                    metric_7: 0.6445,
                    metric_8: 0.9599
                },
                method8: {
                    metric_1: 26.1039,
                    metric_2: 0.2232,
                    metric_3: 0.9789,
                    metric_4: 0.4176,
                    metric_5: 0.539,
                    metric_6: 0.324,
                    metric_7: 0.5806,
                    metric_8: 0.9831
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Art Deco style",
            targetPrompt: "A car is driving toward the camera on an asphalt road in the woods, and there are trees and rocks on the sides of the road, depicted in a Art Deco style",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0012/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0012/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0012/stylization/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0012/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0012/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0012/stylization/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0012/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0012/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.8513,
                    metric_2: 0.2264,
                    metric_3: 0.9529,
                    metric_4: 0.3974,
                    metric_5: 0.6359,
                    metric_6: 0.447,
                    metric_7: 0.6592,
                    metric_8: 0.9866
                },
                method2: {
                    metric_1: 27.3971,
                    metric_2: 0.2375,
                    metric_3: 0.9799,
                    metric_4: 0.6032,
                    metric_5: 0.5332,
                    metric_6: 0.4529,
                    metric_7: 0.6396,
                    metric_8: 0.9888
                },
                method3: {
                    metric_1: 20.0875,
                    metric_2: 0.1123,
                    metric_3: 0.9635,
                    metric_4: 0.5152,
                    metric_5: 0.4534,
                    metric_6: 0.4666,
                    metric_7: 0.5664,
                    metric_8: 0.9916
                },
                method4: {
                    metric_1: 25.1386,
                    metric_2: 0.227,
                    metric_3: 0.9845,
                    metric_4: 0.6208,
                    metric_5: 0.6979,
                    metric_6: 0.3844,
                    metric_7: 0.7378,
                    metric_8: 0.9858
                },
                method5: {
                    metric_1: 26.6311,
                    metric_2: 0.2296,
                    metric_3: 0.9859,
                    metric_4: 0.666,
                    metric_5: 0.7056,
                    metric_6: 0.3714,
                    metric_7: 0.7529,
                    metric_8: 0.986
                },
                method6: {
                    metric_1: 24.1895,
                    metric_2: 0.2311,
                    metric_3: 0.943,
                    metric_4: 0.4526,
                    metric_5: 0.6437,
                    metric_6: 0.4075,
                    metric_7: 0.7007,
                    metric_8: 0.9758
                },
                method7: {
                    metric_1: 28.5585,
                    metric_2: 0.2763,
                    metric_3: 0.9699,
                    metric_4: 0.4353,
                    metric_5: 0.4078,
                    metric_6: 0.2475,
                    metric_7: 0.4224,
                    metric_8: 0.959
                },
                method8: {
                    metric_1: 24.0623,
                    metric_2: 0.2107,
                    metric_3: 0.9749,
                    metric_4: 0.4989,
                    metric_5: 0.5221,
                    metric_6: 0.353,
                    metric_7: 0.5781,
                    metric_8: 0.991
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/vehicle_0023/input.mp4",
    category: "Vehicle",
    originalCaption: "Overhead view of a small red vintage train traveling along a track through a wooded area with lots of trees.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the train stationary.",
            targetPrompt: "An overhead view shows a small vintage train stationary on a track through a wooded area with lots of trees.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0023/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0023/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0023/motion_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0023/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0023/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0023/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0023/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0023/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.6017,
                    metric_2: 0.2735,
                    metric_3: 0.9745,
                    metric_4: 0.214,
                    metric_5: 0.7607,
                    metric_6: 0.5029,
                    metric_7: 0.7749,
                    metric_8: 0.9683
                },
                method2: {
                    metric_1: 24.8982,
                    metric_2: 0.2763,
                    metric_3: 0.9744,
                    metric_4: 0.4492,
                    metric_5: 0.8458,
                    metric_6: 0.6611,
                    metric_7: 0.8843,
                    metric_8: 0.9604
                },
                method3: {
                    metric_1: 23.2795,
                    metric_2: 0.2189,
                    metric_3: 0.9775,
                    metric_4: 0.6042,
                    metric_5: 0.7086,
                    metric_6: 0.4711,
                    metric_7: 0.7319,
                    metric_8: 0.9793
                },
                method4: {
                    metric_1: 22.8153,
                    metric_2: 0.2606,
                    metric_3: 0.9649,
                    metric_4: 0.4829,
                    metric_5: 0.9333,
                    metric_6: 0.6302,
                    metric_7: 0.9268,
                    metric_8: 0.9272
                },
                method5: {
                    metric_1: 24.006,
                    metric_2: 0.2205,
                    metric_3: 0.9689,
                    metric_4: 0.6339,
                    metric_5: 0.8255,
                    metric_6: 0.5805,
                    metric_7: 0.8496,
                    metric_8: 0.9724
                },
                method6: {
                    metric_1: 23.0766,
                    metric_2: 0.2361,
                    metric_3: 0.9744,
                    metric_4: 0.4981,
                    metric_5: 0.7433,
                    metric_6: 0.5006,
                    metric_7: 0.7734,
                    metric_8: 0.9724
                },
                method7: {
                    metric_1: 26.2634,
                    metric_2: 0.2549,
                    metric_3: 0.9537,
                    metric_4: 0.3168,
                    metric_5: 0.628,
                    metric_6: 0.4809,
                    metric_7: 0.6562,
                    metric_8: 0.943
                },
                method8: {
                    metric_1: 24.8131,
                    metric_2: 0.2647,
                    metric_3: 0.9186,
                    metric_4: 0.2672,
                    metric_5: 0.809,
                    metric_6: 0.6561,
                    metric_7: 0.8115,
                    metric_8: 0.9566
                }
            }
        },
        'object-change': {
            editPrompt: "Change the small red vintage train to a car.",
            targetPrompt: "An overhead view of a car traveling along a track through a wooded area with lots of trees.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0023/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0023/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0023/object_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0023/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0023/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0023/object_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0023/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0023/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.85,
                    metric_2: 0.1949,
                    metric_3: 0.9477,
                    metric_4: 0.203,
                    metric_5: 0.752,
                    metric_6: 0.4684,
                    metric_7: 0.7578,
                    metric_8: 0.9641
                },
                method2: {
                    metric_1: 20.968,
                    metric_2: 0.2158,
                    metric_3: 0.9732,
                    metric_4: 0.4365,
                    metric_5: 0.8379,
                    metric_6: 0.5326,
                    metric_7: 0.8735,
                    metric_8: 0.963
                },
                method3: {
                    metric_1: 21.445,
                    metric_2: 0.1425,
                    metric_3: 0.9339,
                    metric_4: 0.3715,
                    metric_5: 0.5583,
                    metric_6: 0.6423,
                    metric_7: 0.7402,
                    metric_8: 0.9821
                },
                method4: {
                    metric_1: 20.6149,
                    metric_2: 0.2021,
                    metric_3: 0.9692,
                    metric_4: 0.4625,
                    metric_5: 0.9022,
                    metric_6: 0.5157,
                    metric_7: 0.896,
                    metric_8: 0.9206
                },
                method5: {
                    metric_1: 21.9904,
                    metric_2: 0.1489,
                    metric_3: 0.9841,
                    metric_4: 0.5818,
                    metric_5: 0.8835,
                    metric_6: 0.6359,
                    metric_7: 0.896,
                    metric_8: 0.9711
                },
                method6: {
                    metric_1: 25.5905,
                    metric_2: 0.1852,
                    metric_3: 0.9396,
                    metric_4: 0.3554,
                    metric_5: 0.261,
                    metric_6: 0.4845,
                    metric_7: 0.5796,
                    metric_8: 0.9713
                },
                method7: {
                    metric_1: 25.0465,
                    metric_2: 0.2013,
                    metric_3: 0.9456,
                    metric_4: 0.3214,
                    metric_5: 0.3645,
                    metric_6: 0.3153,
                    metric_7: 0.5068,
                    metric_8: 0.9512
                },
                method8: {
                    metric_1: 26.3756,
                    metric_2: 0.2486,
                    metric_3: 0.9227,
                    metric_4: 0.2713,
                    metric_5: 0.5949,
                    metric_6: 0.4483,
                    metric_7: 0.6436,
                    metric_8: 0.9719
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a deer standing near the track.",
            targetPrompt: "An overhead view of a small red vintage train traveling along a track through a wooded area with lots of trees, with a deer standing near the track.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0023/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0023/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0023/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0023/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0023/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0023/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0023/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0023/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.2221,
                    metric_2: 0.2527,
                    metric_3: 0.9606,
                    metric_4: 0.2036,
                    metric_5: 0.7498,
                    metric_6: 0.4737,
                    metric_7: 0.7578,
                    metric_8: 0.9643
                },
                method2: {
                    metric_1: 24.5559,
                    metric_2: 0.2287,
                    metric_3: 0.9639,
                    metric_4: 0.3941,
                    metric_5: 0.866,
                    metric_6: 0.6784,
                    metric_7: 0.8418,
                    metric_8: 0.9554
                },
                method3: {
                    metric_1: 23.9004,
                    metric_2: 0.2314,
                    metric_3: 0.9594,
                    metric_4: 0.5627,
                    metric_5: 0.7404,
                    metric_6: 0.5577,
                    metric_7: 0.7554,
                    metric_8: 0.9792
                },
                method4: {
                    metric_1: 24.3283,
                    metric_2: 0.2415,
                    metric_3: 0.964,
                    metric_4: 0.4438,
                    metric_5: 0.8741,
                    metric_6: 0.6565,
                    metric_7: 0.8818,
                    metric_8: 0.918
                },
                method5: {
                    metric_1: 25.414,
                    metric_2: 0.2283,
                    metric_3: 0.971,
                    metric_4: 0.5956,
                    metric_5: 0.8749,
                    metric_6: 0.6482,
                    metric_7: 0.8667,
                    metric_8: 0.9715
                },
                method6: {
                    metric_1: 21.6192,
                    metric_2: 0.227,
                    metric_3: 0.9648,
                    metric_4: 0.4665,
                    metric_5: 0.7067,
                    metric_6: 0.4684,
                    metric_7: 0.7515,
                    metric_8: 0.9716
                },
                method7: {
                    metric_1: 25.2413,
                    metric_2: 0.2332,
                    metric_3: 0.9454,
                    metric_4: 0.2923,
                    metric_5: 0.4538,
                    metric_6: 0.3107,
                    metric_7: 0.5083,
                    metric_8: 0.934
                },
                method8: {
                    metric_1: 23.8525,
                    metric_2: 0.2491,
                    metric_3: 0.9475,
                    metric_4: 0.3118,
                    metric_5: 0.8597,
                    metric_6: 0.702,
                    metric_7: 0.8906,
                    metric_8: 0.9673
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the trees.",
            targetPrompt: "Overhead view of a small red vintage train traveling along a track through a wooded area, with no trees around.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0023/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0023/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0023/object_removal/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0023/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0023/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0023/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0023/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0023/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.8497,
                    metric_2: 0.2894,
                    metric_3: 0.9656,
                    metric_4: 0.2114,
                    metric_5: 0.7482,
                    metric_6: 0.4541,
                    metric_7: 0.7729,
                    metric_8: 0.9665
                },
                method2: {
                    metric_1: 24.9025,
                    metric_2: 0.2484,
                    metric_3: 0.9639,
                    metric_4: 0.4094,
                    metric_5: 0.8907,
                    metric_6: 0.6897,
                    metric_7: 0.8867,
                    metric_8: 0.9572
                },
                method3: {
                    metric_1: 20.0056,
                    metric_2: 0.2025,
                    metric_3: 0.9612,
                    metric_4: 0.5784,
                    metric_5: 0.73,
                    metric_6: 0.5531,
                    metric_7: 0.7749,
                    metric_8: 0.9873
                },
                method4: {
                    metric_1: 24.0675,
                    metric_2: 0.2625,
                    metric_3: 0.9635,
                    metric_4: 0.4578,
                    metric_5: 0.904,
                    metric_6: 0.6745,
                    metric_7: 0.9131,
                    metric_8: 0.9209
                },
                method5: {
                    metric_1: 23.6895,
                    metric_2: 0.2353,
                    metric_3: 0.9902,
                    metric_4: 0.6331,
                    metric_5: 0.7994,
                    metric_6: 0.5534,
                    metric_7: 0.8184,
                    metric_8: 0.9699
                },
                method6: {
                    metric_1: 24.3664,
                    metric_2: 0.2495,
                    metric_3: 0.9704,
                    metric_4: 0.5012,
                    metric_5: 0.7461,
                    metric_6: 0.4391,
                    metric_7: 0.7754,
                    metric_8: 0.9741
                },
                method7: {
                    metric_1: 24.2162,
                    metric_2: 0.2492,
                    metric_3: 0.9546,
                    metric_4: 0.296,
                    metric_5: 0.4941,
                    metric_6: 0.3364,
                    metric_7: 0.5322,
                    metric_8: 0.9409
                },
                method8: {
                    metric_1: 23.8433,
                    metric_2: 0.2687,
                    metric_3: 0.9592,
                    metric_4: 0.3006,
                    metric_5: 0.8543,
                    metric_6: 0.7224,
                    metric_7: 0.8936,
                    metric_8: 0.9665
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a desert.",
            targetPrompt: "Overhead view of a small vintage train traveling along a track located in a desert with lots of trees around.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0023/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0023/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0023/scene_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0023/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0023/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0023/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0023/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0023/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.2911,
                    metric_2: 0.301,
                    metric_3: 0.9617,
                    metric_4: 0.1863,
                    metric_5: 0.7092,
                    metric_6: 0.4152,
                    metric_7: 0.6997,
                    metric_8: 0.9685
                },
                method2: {
                    metric_1: 26.0766,
                    metric_2: 0.3206,
                    metric_3: 0.9745,
                    metric_4: 0.5214,
                    metric_5: 0.8933,
                    metric_6: 0.7249,
                    metric_7: 0.9136,
                    metric_8: 0.9632
                },
                method3: {
                    metric_1: 24.183,
                    metric_2: 0.2496,
                    metric_3: 0.9481,
                    metric_4: 0.3573,
                    metric_5: 0.842,
                    metric_6: 0.6611,
                    metric_7: 0.8237,
                    metric_8: 0.9767
                },
                method4: {
                    metric_1: 24.2305,
                    metric_2: 0.2965,
                    metric_3: 0.9758,
                    metric_4: 0.521,
                    metric_5: 0.9247,
                    metric_6: 0.7122,
                    metric_7: 0.9258,
                    metric_8: 0.94
                },
                method5: {
                    metric_1: 26.9429,
                    metric_2: 0.2717,
                    metric_3: 0.9877,
                    metric_4: 0.5844,
                    metric_5: 0.7654,
                    metric_6: 0.5754,
                    metric_7: 0.7905,
                    metric_8: 0.9758
                },
                method6: {
                    metric_1: 24.7734,
                    metric_2: 0.2769,
                    metric_3: 0.9641,
                    metric_4: 0.4828,
                    metric_5: 0.7758,
                    metric_6: 0.5937,
                    metric_7: 0.8237,
                    metric_8: 0.9778
                },
                method7: {
                    metric_1: 28.84,
                    metric_2: 0.2681,
                    metric_3: 0.952,
                    metric_4: 0.2578,
                    metric_5: 0.6937,
                    metric_6: 0.5667,
                    metric_7: 0.7134,
                    metric_8: 0.9393
                },
                method8: {
                    metric_1: 24.794,
                    metric_2: 0.2915,
                    metric_3: 0.9451,
                    metric_4: 0.2749,
                    metric_5: 0.7737,
                    metric_6: 0.6411,
                    metric_7: 0.8057,
                    metric_8: 0.9679
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Ukiyo style",
            targetPrompt: "Overhead view of a small vintage train traveling along a track through a wooded area with lots of trees, depicted in a Ukiyo style",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0023/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0023/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0023/stylization/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0023/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0023/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0023/stylization/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0023/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0023/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.7407,
                    metric_2: 0.225,
                    metric_3: 0.9635,
                    metric_4: 0.1845,
                    metric_5: 0.7309,
                    metric_6: 0.4864,
                    metric_7: 0.7246,
                    metric_8: 0.9614
                },
                method2: {
                    metric_1: 24.4433,
                    metric_2: 0.2488,
                    metric_3: 0.9642,
                    metric_4: 0.4592,
                    metric_5: 0.8661,
                    metric_6: 0.6999,
                    metric_7: 0.8975,
                    metric_8: 0.9613
                },
                method3: {
                    metric_1: 29.8383,
                    metric_2: 0.2504,
                    metric_3: 0.9869,
                    metric_4: 0.4875,
                    metric_5: 0.6184,
                    metric_6: 0.5407,
                    metric_7: 0.7202,
                    metric_8: 0.9802
                },
                method4: {
                    metric_1: 21.3436,
                    metric_2: 0.2344,
                    metric_3: 0.9715,
                    metric_4: 0.4964,
                    metric_5: 0.9459,
                    metric_6: 0.6983,
                    metric_7: 0.9399,
                    metric_8: 0.9238
                },
                method5: {
                    metric_1: 22.0124,
                    metric_2: 0.1935,
                    metric_3: 0.9838,
                    metric_4: 0.6025,
                    metric_5: 0.844,
                    metric_6: 0.5911,
                    metric_7: 0.8589,
                    metric_8: 0.967
                },
                method6: {
                    metric_1: 24.804,
                    metric_2: 0.2265,
                    metric_3: 0.9759,
                    metric_4: 0.4806,
                    metric_5: 0.6083,
                    metric_6: 0.4865,
                    metric_7: 0.6606,
                    metric_8: 0.968
                },
                method7: {
                    metric_1: 25.1085,
                    metric_2: 0.2276,
                    metric_3: 0.9511,
                    metric_4: 0.3139,
                    metric_5: 0.5711,
                    metric_6: 0.4365,
                    metric_7: 0.6304,
                    metric_8: 0.9449
                },
                method8: {
                    metric_1: 23.9679,
                    metric_2: 0.2331,
                    metric_3: 0.948,
                    metric_4: 0.2533,
                    metric_5: 0.8087,
                    metric_6: 0.6804,
                    metric_7: 0.813,
                    metric_8: 0.9557
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/vehicle_0031/input.mp4",
    category: "Vehicle",
    originalCaption: "A redbull helicopter flying over a snowy mountain range.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the helicopter flying in the opposite direction.",
            targetPrompt: "A Red Bull helicopter flying in the opposite direction over a snowy mountain range.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0031/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0031/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0031/motion_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0031/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0031/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0031/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0031/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0031/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.8305,
                    metric_2: 0.291,
                    metric_3: 0.9546,
                    metric_4: 0.5049,
                    metric_5: 0.8109,
                    metric_6: 0.6758,
                    metric_7: 0.7896,
                    metric_8: 0.9444
                },
                method2: {
                    metric_1: 35.6428,
                    metric_2: 0.3628,
                    metric_3: 0.9605,
                    metric_4: 0.7757,
                    metric_5: 0.9511,
                    metric_6: 0.7437,
                    metric_7: 0.9116,
                    metric_8: 0.9536
                },
                method3: {
                    metric_1: 32.4563,
                    metric_2: 0.3174,
                    metric_3: 0.9777,
                    metric_4: 0.8722,
                    metric_5: 0.5933,
                    metric_6: 0.4437,
                    metric_7: 0.6226,
                    metric_8: 0.962
                },
                method4: {
                    metric_1: 36.0609,
                    metric_2: 0.3588,
                    metric_3: 0.9055,
                    metric_4: 0.7515,
                    metric_5: 0.899,
                    metric_6: 0.7264,
                    metric_7: 0.8618,
                    metric_8: 0.9415
                },
                method5: {
                    metric_1: 33.85,
                    metric_2: 0.3468,
                    metric_3: 0.9908,
                    metric_4: 0.9251,
                    metric_5: 0.6461,
                    metric_6: 0.4289,
                    metric_7: 0.626,
                    metric_8: 0.9579
                },
                method6: {
                    metric_1: 28.9141,
                    metric_2: 0.3178,
                    metric_3: 0.9507,
                    metric_4: 0.6987,
                    metric_5: 0.7718,
                    metric_6: 0.5783,
                    metric_7: 0.7495,
                    metric_8: 0.9548
                },
                method7: {
                    metric_1: 33.5111,
                    metric_2: 0.3398,
                    metric_3: 0.9206,
                    metric_4: 0.6424,
                    metric_5: 0.3928,
                    metric_6: 0.3045,
                    metric_7: 0.4204,
                    metric_8: 0.9227
                },
                method8: {
                    metric_1: 29.5874,
                    metric_2: 0.2848,
                    metric_3: 0.9686,
                    metric_4: 0.6073,
                    metric_5: 0.7193,
                    metric_6: 0.527,
                    metric_7: 0.5742,
                    metric_8: 0.9092
                }
            }
        },
        'object-change': {
            editPrompt: "Change the helicopter to a hot air balloon.",
            targetPrompt: "A Red Bull hot air balloon flying over a snowy mountain range.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0031/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0031/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0031/object_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0031/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0031/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0031/object_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0031/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0031/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 35.1408,
                    metric_2: 0.366,
                    metric_3: 0.9505,
                    metric_4: 0.5476,
                    metric_5: 0.7768,
                    metric_6: 0.637,
                    metric_7: 0.7725,
                    metric_8: 0.9645
                },
                method2: {
                    metric_1: 33.3536,
                    metric_2: 0.3648,
                    metric_3: 0.9834,
                    metric_4: 0.7734,
                    metric_5: 0.7827,
                    metric_6: 0.6171,
                    metric_7: 0.7896,
                    metric_8: 0.9589
                },
                method3: {
                    metric_1: 21.485,
                    metric_2: 0.2089,
                    metric_3: 0.9166,
                    metric_4: 0.5867,
                    metric_5: 0.4511,
                    metric_6: 0.4208,
                    metric_7: 0.5806,
                    metric_8: 0.9293
                },
                method4: {
                    metric_1: 33.6369,
                    metric_2: 0.3531,
                    metric_3: 0.8986,
                    metric_4: 0.7118,
                    metric_5: 0.8149,
                    metric_6: 0.677,
                    metric_7: 0.8242,
                    metric_8: 0.9445
                },
                method5: {
                    metric_1: 25.0108,
                    metric_2: 0.2248,
                    metric_3: 0.9844,
                    metric_4: 0.8489,
                    metric_5: 0.5385,
                    metric_6: 0.384,
                    metric_7: 0.4783,
                    metric_8: 0.9627
                },
                method6: {
                    metric_1: 21.6254,
                    metric_2: 0.2614,
                    metric_3: 0.6008,
                    metric_4: 0.698,
                    metric_5: 0.6193,
                    metric_6: 0.5251,
                    metric_7: 0.7295,
                    metric_8: 0.9693
                },
                method7: {
                    metric_1: 27.4982,
                    metric_2: 0.2801,
                    metric_3: 0.6501,
                    metric_4: 0.5939,
                    metric_5: 0.4713,
                    metric_6: 0.3737,
                    metric_7: 0.4678,
                    metric_8: 0.9368
                },
                method8: {
                    metric_1: 35.5788,
                    metric_2: 0.3587,
                    metric_3: 0.9869,
                    metric_4: 0.6333,
                    metric_5: 0.767,
                    metric_6: 0.5657,
                    metric_7: 0.7246,
                    metric_8: 0.9054
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a ladder to the helicopter.",
            targetPrompt: "A Red Bull helicopter with a ladder attached is flying over a snowy mountain range.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0031/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0031/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0031/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0031/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0031/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0031/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0031/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0031/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 31.3923,
                    metric_2: 0.3291,
                    metric_3: 0.9461,
                    metric_4: 0.5141,
                    metric_5: 0.7365,
                    metric_6: 0.5496,
                    metric_7: 0.7646,
                    metric_8: 0.96
                },
                method2: {
                    metric_1: 36.3589,
                    metric_2: 0.3449,
                    metric_3: 0.9858,
                    metric_4: 0.7787,
                    metric_5: 0.945,
                    metric_6: 0.7427,
                    metric_7: 0.9004,
                    metric_8: 0.9525
                },
                method3: {
                    metric_1: 33.9277,
                    metric_2: 0.2864,
                    metric_3: 0.9774,
                    metric_4: 0.8341,
                    metric_5: 0.6424,
                    metric_6: 0.4931,
                    metric_7: 0.6479,
                    metric_8: 0.9621
                },
                method4: {
                    metric_1: 37.012,
                    metric_2: 0.3436,
                    metric_3: 0.9246,
                    metric_4: 0.7468,
                    metric_5: 0.8685,
                    metric_6: 0.7044,
                    metric_7: 0.835,
                    metric_8: 0.9406
                },
                method5: {
                    metric_1: 35.948,
                    metric_2: 0.3329,
                    metric_3: 0.9655,
                    metric_4: 0.9145,
                    metric_5: 0.7036,
                    metric_6: 0.4662,
                    metric_7: 0.6304,
                    metric_8: 0.9547
                },
                method6: {
                    metric_1: 30.7688,
                    metric_2: 0.3046,
                    metric_3: 0.8527,
                    metric_4: 0.6667,
                    metric_5: 0.7062,
                    metric_6: 0.5106,
                    metric_7: 0.7056,
                    metric_8: 0.9393
                },
                method7: {
                    metric_1: 33.9826,
                    metric_2: 0.3058,
                    metric_3: 0.8572,
                    metric_4: 0.6535,
                    metric_5: 0.4008,
                    metric_6: 0.2833,
                    metric_7: 0.3889,
                    metric_8: 0.9204
                },
                method8: {
                    metric_1: 31.4756,
                    metric_2: 0.2899,
                    metric_3: 0.9727,
                    metric_4: 0.6098,
                    metric_5: 0.7452,
                    metric_6: 0.5411,
                    metric_7: 0.6641,
                    metric_8: 0.9065
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the helicopter.",
            targetPrompt: "A snowy mountain range.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0031/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0031/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0031/object_removal/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0031/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0031/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0031/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0031/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0031/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 20.1261,
                    metric_2: 0.1725,
                    metric_3: 0.9577,
                    metric_4: 0.532,
                    metric_5: 0.6293,
                    metric_6: 0.4248,
                    metric_7: 0.6997,
                    metric_8: 0.9664
                },
                method2: {
                    metric_1: 23.6549,
                    metric_2: 0.2646,
                    metric_3: 0.9041,
                    metric_4: 0.7447,
                    metric_5: 0.7535,
                    metric_6: 0.4254,
                    metric_7: 0.7485,
                    metric_8: 0.9558
                },
                method3: {
                    metric_1: 22.3561,
                    metric_2: 0.1607,
                    metric_3: 0.8716,
                    metric_4: 0.6779,
                    metric_5: 0.3871,
                    metric_6: 0.4107,
                    metric_7: 0.4729,
                    metric_8: 0.9765
                },
                method4: {
                    metric_1: 24.5946,
                    metric_2: 0.2541,
                    metric_3: 0.9415,
                    metric_4: 0.7041,
                    metric_5: 0.6925,
                    metric_6: 0.4191,
                    metric_7: 0.73,
                    metric_8: 0.9428
                },
                method5: {
                    metric_1: 20.4713,
                    metric_2: 0.122,
                    metric_3: 0.9865,
                    metric_4: 0.9196,
                    metric_5: 0.6418,
                    metric_6: 0.4312,
                    metric_7: 0.6079,
                    metric_8: 0.9527
                },
                method6: {
                    metric_1: 20.678,
                    metric_2: 0.1473,
                    metric_3: 0.504,
                    metric_4: 0.6678,
                    metric_5: 0.5913,
                    metric_6: 0.4501,
                    metric_7: 0.7065,
                    metric_8: 0.9618
                },
                method7: {
                    metric_1: 24.2131,
                    metric_2: 0.2669,
                    metric_3: 0.8411,
                    metric_4: 0.6082,
                    metric_5: 0.2767,
                    metric_6: 0.2435,
                    metric_7: 0.2981,
                    metric_8: 0.9092
                },
                method8: {
                    metric_1: 24.7495,
                    metric_2: 0.2474,
                    metric_3: 0.8519,
                    metric_4: 0.6262,
                    metric_5: 0.4878,
                    metric_6: 0.2882,
                    metric_7: 0.5034,
                    metric_8: 0.9065
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it flying over a desert.",
            targetPrompt: "A Red Bull helicopter flying over a desert.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0031/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0031/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0031/scene_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0031/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0031/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0031/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0031/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0031/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.7806,
                    metric_2: 0.2301,
                    metric_3: 0.9533,
                    metric_4: 0.5229,
                    metric_5: 0.897,
                    metric_6: 0.6729,
                    metric_7: 0.8276,
                    metric_8: 0.9576
                },
                method2: {
                    metric_1: 31.2281,
                    metric_2: 0.2542,
                    metric_3: 0.9759,
                    metric_4: 0.7615,
                    metric_5: 0.902,
                    metric_6: 0.6995,
                    metric_7: 0.8716,
                    metric_8: 0.9726
                },
                method3: {
                    metric_1: 28.0151,
                    metric_2: 0.2395,
                    metric_3: 0.9535,
                    metric_4: 0.6425,
                    metric_5: 0.4424,
                    metric_6: 0.4506,
                    metric_7: 0.5337,
                    metric_8: 0.9536
                },
                method4: {
                    metric_1: 31.3493,
                    metric_2: 0.2446,
                    metric_3: 0.9095,
                    metric_4: 0.7796,
                    metric_5: 0.8069,
                    metric_6: 0.6377,
                    metric_7: 0.7603,
                    metric_8: 0.9546
                },
                method5: {
                    metric_1: 32.2878,
                    metric_2: 0.287,
                    metric_3: 0.9663,
                    metric_4: 0.8055,
                    metric_5: 0.589,
                    metric_6: 0.416,
                    metric_7: 0.5312,
                    metric_8: 0.9696
                },
                method6: {
                    metric_1: 33.0812,
                    metric_2: 0.3562,
                    metric_3: 0.5285,
                    metric_4: 0.6786,
                    metric_5: 0.7467,
                    metric_6: 0.4691,
                    metric_7: 0.6909,
                    metric_8: 0.9767
                },
                method7: {
                    metric_1: 33.1185,
                    metric_2: 0.2897,
                    metric_3: 0.8131,
                    metric_4: 0.6483,
                    metric_5: 0.4133,
                    metric_6: 0.2991,
                    metric_7: 0.4526,
                    metric_8: 0.9546
                },
                method8: {
                    metric_1: 23.2907,
                    metric_2: 0.1842,
                    metric_3: 0.9867,
                    metric_4: 0.6338,
                    metric_5: 0.7967,
                    metric_6: 0.5997,
                    metric_7: 0.666,
                    metric_8: 0.9185
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Fashion Photography style",
            targetPrompt: "A redbull helicopter flying over a snowy mountain range, depicted in a Fashion Photography style",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0031/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0031/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0031/stylization/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0031/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0031/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0031/stylization/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0031/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0031/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 30.0352,
                    metric_2: 0.2823,
                    metric_3: 0.9244,
                    metric_4: 0.5023,
                    metric_5: 0.7968,
                    metric_6: 0.5865,
                    metric_7: 0.7773,
                    metric_8: 0.9416
                },
                method2: {
                    metric_1: 35.2363,
                    metric_2: 0.336,
                    metric_3: 0.9892,
                    metric_4: 0.7721,
                    metric_5: 0.9854,
                    metric_6: 0.7974,
                    metric_7: 0.9321,
                    metric_8: 0.9535
                },
                method3: {
                    metric_1: 31.2781,
                    metric_2: 0.2428,
                    metric_3: 0.9713,
                    metric_4: 0.7862,
                    metric_5: 0.7067,
                    metric_6: 0.5185,
                    metric_7: 0.6694,
                    metric_8: 0.9609
                },
                method4: {
                    metric_1: 36.0379,
                    metric_2: 0.3419,
                    metric_3: 0.9516,
                    metric_4: 0.7616,
                    metric_5: 0.9437,
                    metric_6: 0.7668,
                    metric_7: 0.8833,
                    metric_8: 0.9419
                },
                method5: {
                    metric_1: 34.5258,
                    metric_2: 0.3394,
                    metric_3: 0.9568,
                    metric_4: 0.7959,
                    metric_5: 0.6265,
                    metric_6: 0.4582,
                    metric_7: 0.5703,
                    metric_8: 0.9462
                },
                method6: {
                    metric_1: 31.954,
                    metric_2: 0.3144,
                    metric_3: 0.8426,
                    metric_4: 0.6751,
                    metric_5: 0.9584,
                    metric_6: 0.76,
                    metric_7: 0.8735,
                    metric_8: 0.9445
                },
                method7: {
                    metric_1: 37.8751,
                    metric_2: 0.3442,
                    metric_3: 0.8861,
                    metric_4: 0.5776,
                    metric_5: 0.3568,
                    metric_6: 0.3013,
                    metric_7: 0.3579,
                    metric_8: 0.9002
                },
                method8: {
                    metric_1: 30.0886,
                    metric_2: 0.2549,
                    metric_3: 0.9844,
                    metric_4: 0.6006,
                    metric_5: 0.7348,
                    metric_6: 0.5315,
                    metric_7: 0.627,
                    metric_8: 0.9087
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Short/vehicle_0044/input.mp4",
    category: "Vehicle",
    originalCaption: "A rocket launches into space on a clear day with a cloud of smoke",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the rocket descending back to Earth.",
            targetPrompt: "The rocket, which launched into space on a clear day with a cloud of smoke, is now descending back to Earth.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0044/motion_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0044/motion_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0044/motion_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0044/motion_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0044/motion_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0044/motion_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0044/motion_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0044/motion_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.1741,
                    metric_2: 0.2184,
                    metric_3: 0.8793,
                    metric_4: 0.9094,
                    metric_5: 0.5147,
                    metric_6: 0.4387,
                    metric_7: 0.6543,
                    metric_8: 0.9949
                },
                method2: {
                    metric_1: 21.5536,
                    metric_2: 0.1825,
                    metric_3: 0.8843,
                    metric_4: 0.9629,
                    metric_5: 0.5201,
                    metric_6: 0.3969,
                    metric_7: 0.6284,
                    metric_8: 0.9934
                },
                method3: {
                    metric_1: 22.8293,
                    metric_2: 0.1993,
                    metric_3: 0.8962,
                    metric_4: 0.9673,
                    metric_5: 0.4857,
                    metric_6: 0.3875,
                    metric_7: 0.6353,
                    metric_8: 0.9879
                },
                method4: {
                    metric_1: 21.6925,
                    metric_2: 0.1713,
                    metric_3: 0.8385,
                    metric_4: 0.9418,
                    metric_5: 0.6933,
                    metric_6: 0.4987,
                    metric_7: 0.7422,
                    metric_8: 0.9909
                },
                method5: {
                    metric_1: 20.914,
                    metric_2: 0.1919,
                    metric_3: 0.9177,
                    metric_4: 0.9562,
                    metric_5: 0.6236,
                    metric_6: 0.5235,
                    metric_7: 0.6924,
                    metric_8: 0.9935
                },
                method6: {
                    metric_1: 21.6473,
                    metric_2: 0.211,
                    metric_3: 0.8469,
                    metric_4: 0.9247,
                    metric_5: 0.4021,
                    metric_6: 0.2372,
                    metric_7: 0.4719,
                    metric_8: 0.9884
                },
                method7: {
                    metric_1: 21.0141,
                    metric_2: 0.172,
                    metric_3: 0.8037,
                    metric_4: 0.8776,
                    metric_5: 0.286,
                    metric_6: 0.1939,
                    metric_7: 0.3799,
                    metric_8: 0.9855
                },
                method8: {
                    metric_1: 20.2581,
                    metric_2: 0.1836,
                    metric_3: 0.8896,
                    metric_4: 0.8805,
                    metric_5: 0.4986,
                    metric_6: 0.4253,
                    metric_7: 0.5742,
                    metric_8: 0.9882
                }
            }
        },
        'object-change': {
            editPrompt: "Change the rocket to a missle",
            targetPrompt: "A missle launches into space on a clear day with a cloud of smoke.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0044/object_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0044/object_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0044/object_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0044/object_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0044/object_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0044/object_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0044/object_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0044/object_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.1788,
                    metric_2: 0.2187,
                    metric_3: 0.8649,
                    metric_4: 0.9053,
                    metric_5: 0.3929,
                    metric_6: 0.3581,
                    metric_7: 0.603,
                    metric_8: 0.9947
                },
                method2: {
                    metric_1: 22.8878,
                    metric_2: 0.2106,
                    metric_3: 0.9216,
                    metric_4: 0.9661,
                    metric_5: 0.5129,
                    metric_6: 0.3976,
                    metric_7: 0.6621,
                    metric_8: 0.9934
                },
                method3: {
                    metric_1: 26.5406,
                    metric_2: 0.2379,
                    metric_3: 0.8873,
                    metric_4: 0.9665,
                    metric_5: 0.1764,
                    metric_6: 0.2289,
                    metric_7: 0.4023,
                    metric_8: 0.9921
                },
                method4: {
                    metric_1: 22.8723,
                    metric_2: 0.2039,
                    metric_3: 0.8998,
                    metric_4: 0.9429,
                    metric_5: 0.6066,
                    metric_6: 0.4434,
                    metric_7: 0.7046,
                    metric_8: 0.9919
                },
                method5: {
                    metric_1: 24.5012,
                    metric_2: 0.2403,
                    metric_3: 0.867,
                    metric_4: 0.9572,
                    metric_5: 0.3576,
                    metric_6: 0.3653,
                    metric_7: 0.542,
                    metric_8: 0.9936
                },
                method6: {
                    metric_1: 24.2548,
                    metric_2: 0.2571,
                    metric_3: 0.8591,
                    metric_4: 0.9132,
                    metric_5: 0.4213,
                    metric_6: 0.2324,
                    metric_7: 0.5425,
                    metric_8: 0.9879
                },
                method7: {
                    metric_1: 23.0325,
                    metric_2: 0.2179,
                    metric_3: 0.9117,
                    metric_4: 0.8402,
                    metric_5: 0.219,
                    metric_6: 0.1147,
                    metric_7: 0.2898,
                    metric_8: 0.9794
                },
                method8: {
                    metric_1: 24.0999,
                    metric_2: 0.223,
                    metric_3: 0.8961,
                    metric_4: 0.8929,
                    metric_5: 0.3985,
                    metric_6: 0.31,
                    metric_7: 0.4836,
                    metric_8: 0.9893
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a flock of birds flying in the sky.",
            targetPrompt: "A rocket launches into space on a clear day with a cloud of smoke, as a flock of birds flies in the sky.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0044/object_insertion/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0044/object_insertion/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0044/object_insertion/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0044/object_insertion/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0044/object_insertion/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0044/object_insertion/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0044/object_insertion/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0044/object_insertion/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.4183,
                    metric_2: 0.2223,
                    metric_3: 0.8396,
                    metric_4: 0.912,
                    metric_5: 0.4406,
                    metric_6: 0.3582,
                    metric_7: 0.5952,
                    metric_8: 0.995
                },
                method2: {
                    metric_1: 24.0293,
                    metric_2: 0.236,
                    metric_3: 0.8443,
                    metric_4: 0.9633,
                    metric_5: 0.4744,
                    metric_6: 0.3282,
                    metric_7: 0.6357,
                    metric_8: 0.9933
                },
                method3: {
                    metric_1: 22.1189,
                    metric_2: 0.21,
                    metric_3: 0.8932,
                    metric_4: 0.945,
                    metric_5: 0.0663,
                    metric_6: 0.1031,
                    metric_7: 0.1895,
                    metric_8: 0.9884
                },
                method4: {
                    metric_1: 21.6074,
                    metric_2: 0.1912,
                    metric_3: 0.8675,
                    metric_4: 0.9368,
                    metric_5: 0.6382,
                    metric_6: 0.4781,
                    metric_7: 0.7339,
                    metric_8: 0.991
                },
                method5: {
                    metric_1: 30.0784,
                    metric_2: 0.2936,
                    metric_3: 0.8574,
                    metric_4: 0.9303,
                    metric_5: 0.4175,
                    metric_6: 0.3869,
                    metric_7: 0.5322,
                    metric_8: 0.9931
                },
                method6: {
                    metric_1: 22.7361,
                    metric_2: 0.2426,
                    metric_3: 0.813,
                    metric_4: 0.921,
                    metric_5: 0.4373,
                    metric_6: 0.243,
                    metric_7: 0.5776,
                    metric_8: 0.9883
                },
                method7: {
                    metric_1: 21.7621,
                    metric_2: 0.198,
                    metric_3: 0.8932,
                    metric_4: 0.8302,
                    metric_5: 0.2339,
                    metric_6: 0.1331,
                    metric_7: 0.2766,
                    metric_8: 0.979
                },
                method8: {
                    metric_1: 23.0173,
                    metric_2: 0.2246,
                    metric_3: 0.8888,
                    metric_4: 0.8974,
                    metric_5: 0.4491,
                    metric_6: 0.3557,
                    metric_7: 0.5264,
                    metric_8: 0.9901
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the cloud of smoke.",
            targetPrompt: "A rocket launches into space on a clear day, without releasing a cloud of smoke.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0044/object_removal/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0044/object_removal/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0044/object_removal/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0044/object_removal/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0044/object_removal/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0044/object_removal/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0044/object_removal/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0044/object_removal/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.9841,
                    metric_2: 0.2401,
                    metric_3: 0.8738,
                    metric_4: 0.9143,
                    metric_5: 0.4666,
                    metric_6: 0.3637,
                    metric_7: 0.6304,
                    metric_8: 0.995
                },
                method2: {
                    metric_1: 23.4593,
                    metric_2: 0.2154,
                    metric_3: 0.9174,
                    metric_4: 0.9665,
                    metric_5: 0.4215,
                    metric_6: 0.3406,
                    metric_7: 0.5566,
                    metric_8: 0.9934
                },
                method3: {
                    metric_1: 23.2603,
                    metric_2: 0.2007,
                    metric_3: 0.8521,
                    metric_4: 0.9544,
                    metric_5: 0.1723,
                    metric_6: 0.1918,
                    metric_7: 0.321,
                    metric_8: 0.9908
                },
                method4: {
                    metric_1: 22.7922,
                    metric_2: 0.1995,
                    metric_3: 0.8713,
                    metric_4: 0.9369,
                    metric_5: 0.6028,
                    metric_6: 0.4229,
                    metric_7: 0.6875,
                    metric_8: 0.9913
                },
                method5: {
                    metric_1: 23.9198,
                    metric_2: 0.207,
                    metric_3: 0.9217,
                    metric_4: 0.9076,
                    metric_5: 0.3941,
                    metric_6: 0.3742,
                    metric_7: 0.542,
                    metric_8: 0.9927
                },
                method6: {
                    metric_1: 24.0732,
                    metric_2: 0.2422,
                    metric_3: 0.8589,
                    metric_4: 0.9148,
                    metric_5: 0.4213,
                    metric_6: 0.2397,
                    metric_7: 0.5474,
                    metric_8: 0.9879
                },
                method7: {
                    metric_1: 24.6016,
                    metric_2: 0.217,
                    metric_3: 0.8158,
                    metric_4: 0.8535,
                    metric_5: 0.2129,
                    metric_6: 0.1007,
                    metric_7: 0.2844,
                    metric_8: 0.9794
                },
                method8: {
                    metric_1: 24.4499,
                    metric_2: 0.2407,
                    metric_3: 0.9025,
                    metric_4: 0.8859,
                    metric_5: 0.4469,
                    metric_6: 0.3669,
                    metric_7: 0.5234,
                    metric_8: 0.9885
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it at night with stars visible.",
            targetPrompt: "A rocket launches into space at night with stars visible, leaving behind a cloud of smoke.",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0044/scene_change/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0044/scene_change/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0044/scene_change/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0044/scene_change/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0044/scene_change/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0044/scene_change/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0044/scene_change/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0044/scene_change/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.8497,
                    metric_2: 0.1974,
                    metric_3: 0.855,
                    metric_4: 0.9068,
                    metric_5: 0.4859,
                    metric_6: 0.3983,
                    metric_7: 0.627,
                    metric_8: 0.994
                },
                method2: {
                    metric_1: 22.3759,
                    metric_2: 0.1659,
                    metric_3: 0.932,
                    metric_4: 0.9663,
                    metric_5: 0.4359,
                    metric_6: 0.3733,
                    metric_7: 0.5913,
                    metric_8: 0.9939
                },
                method3: {
                    metric_1: 25.4601,
                    metric_2: 0.2221,
                    metric_3: 0.9115,
                    metric_4: 0.9341,
                    metric_5: 0.2343,
                    metric_6: 0.2095,
                    metric_7: 0.394,
                    metric_8: 0.9867
                },
                method4: {
                    metric_1: 22.0818,
                    metric_2: 0.1644,
                    metric_3: 0.9144,
                    metric_4: 0.9428,
                    metric_5: 0.6186,
                    metric_6: 0.4517,
                    metric_7: 0.6934,
                    metric_8: 0.9911
                },
                method5: {
                    metric_1: 22.4721,
                    metric_2: 0.1731,
                    metric_3: 0.9135,
                    metric_4: 0.867,
                    metric_5: 0.5895,
                    metric_6: 0.4652,
                    metric_7: 0.5811,
                    metric_8: 0.9918
                },
                method6: {
                    metric_1: 22.5403,
                    metric_2: 0.2091,
                    metric_3: 0.8702,
                    metric_4: 0.9179,
                    metric_5: 0.4002,
                    metric_6: 0.2739,
                    metric_7: 0.5112,
                    metric_8: 0.9888
                },
                method7: {
                    metric_1: 23.0863,
                    metric_2: 0.182,
                    metric_3: 0.8764,
                    metric_4: 0.8482,
                    metric_5: 0.2152,
                    metric_6: 0.0933,
                    metric_7: 0.272,
                    metric_8: 0.9798
                },
                method8: {
                    metric_1: 22.9228,
                    metric_2: 0.2013,
                    metric_3: 0.8782,
                    metric_4: 0.868,
                    metric_5: 0.2798,
                    metric_6: 0.2664,
                    metric_7: 0.3472,
                    metric_8: 0.9879
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a Afrofuturism style",
            targetPrompt: "A rocket launches into space on a clear day with a cloud of smoke, depicted in a Afrofuturism style",
            resultVideos: {
                method1: "VEditBench-Short/vehicle_0044/stylization/diffusion-motion-transfer.mp4",
                method2: "VEditBench-Short/vehicle_0044/stylization/VidToMe.mp4",
                method3: "VEditBench-Short/vehicle_0044/stylization/flatten.mp4",
                method4: "VEditBench-Short/vehicle_0044/stylization/TokenFlow.mp4",
                method5: "VEditBench-Short/vehicle_0044/stylization/instruct-video-to-video.mp4",
                method6: "VEditBench-Short/vehicle_0044/stylization/pix2video.mp4",
                method7: "VEditBench-Short/vehicle_0044/stylization/Tune-A-Video.mp4",
                method8: "VEditBench-Short/vehicle_0044/stylization/MotionDirector.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.1683,
                    metric_2: 0.2144,
                    metric_3: 0.8768,
                    metric_4: 0.9123,
                    metric_5: 0.5309,
                    metric_6: 0.4064,
                    metric_7: 0.709,
                    metric_8: 0.995
                },
                method2: {
                    metric_1: 22.4723,
                    metric_2: 0.1936,
                    metric_3: 0.9314,
                    metric_4: 0.969,
                    metric_5: 0.5942,
                    metric_6: 0.5063,
                    metric_7: 0.6934,
                    metric_8: 0.9936
                },
                method3: {
                    metric_1: 23.6653,
                    metric_2: 0.1963,
                    metric_3: 0.9031,
                    metric_4: 0.9245,
                    metric_5: 0.1594,
                    metric_6: 0.1707,
                    metric_7: 0.2964,
                    metric_8: 0.9788
                },
                method4: {
                    metric_1: 21.8675,
                    metric_2: 0.1889,
                    metric_3: 0.883,
                    metric_4: 0.9378,
                    metric_5: 0.6671,
                    metric_6: 0.5084,
                    metric_7: 0.7456,
                    metric_8: 0.9912
                },
                method5: {
                    metric_1: 24.6166,
                    metric_2: 0.242,
                    metric_3: 0.8702,
                    metric_4: 0.8962,
                    metric_5: 0.5042,
                    metric_6: 0.5345,
                    metric_7: 0.5806,
                    metric_8: 0.9897
                },
                method6: {
                    metric_1: 24.345,
                    metric_2: 0.2259,
                    metric_3: 0.8886,
                    metric_4: 0.9366,
                    metric_5: 0.4923,
                    metric_6: 0.3765,
                    metric_7: 0.6382,
                    metric_8: 0.9911
                },
                method7: {
                    metric_1: 22.9736,
                    metric_2: 0.2233,
                    metric_3: 0.9252,
                    metric_4: 0.8364,
                    metric_5: 0.2352,
                    metric_6: 0.1299,
                    metric_7: 0.2927,
                    metric_8: 0.9784
                },
                method8: {
                    metric_1: 24.3295,
                    metric_2: 0.2333,
                    metric_3: 0.8915,
                    metric_4: 0.8953,
                    metric_5: 0.3339,
                    metric_6: 0.312,
                    metric_7: 0.457,
                    metric_8: 0.989
                }
            }
        }
    }
}
];
window.demoData = demoData;
