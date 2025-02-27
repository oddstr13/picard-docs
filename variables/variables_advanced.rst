.. MusicBrainz Picard Documentation Project

.. TODO: Expand definitions

.. TODO: Note which tags are not provided by Picard

:index:`Advanced Variables <variables; advanced>`
==================================================

If you enable tagging with :doc:`Use track relationships </config/options_metadata>`, you get these extra variables:

.. note::

   Variables will not be created if there was no value retrieved for the variable from the MusicBrainz database.

**_lyricistsort**

    The sort names of the lyricists for the work. (*since Picard 2.9*)

**_performance_attributes**

    List of performance attributes for the work (e.g.: "live", "cover", "medley"). Use :ref:`func_inmulti` to check for
    a specific type (i.e.: ``$if($inmulti(%_performance_attributes%,medley), (Medley),)``). (*since Picard 1.3*)

**_recordingcomment**

    Recording disambiguation comment. (*since Picard 0.15*)

**_recordingtitle**

    Recording title - normally the same as the Track title, but can be different.

**_workcomment**

    Work disambiguation comment. (*since Picard 2.7*)

**_writersort**

    The sort names of the writers for the work. (*since Picard 2.9*)
